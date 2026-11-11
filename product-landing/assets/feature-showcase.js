/**
 * Feature Showcase — behavior for the features section.
 * Do NOT rewrite this logic. Copy the file as-is and only write the HTML + content.
 *
 * HTML contract (all attributes are required unless marked optional):
 *
 * <section data-showcase>
 *   <div data-showcase-label-row> ... typing dots (optional) ... </div>
 *   <p data-showcase-text>First example of the first feature</p>
 *   <div data-showcase-chips>
 *     <button type="button" data-feature="browser">…icon… Browser</button>
 *     …one button per feature…
 *   </div>
 *   <div data-showcase-table>
 *     <div data-feature="browser">…icon tile, title, description…</div>
 *     …one cell per feature, same order as chips…
 *   </div>
 *   <script type="application/json" data-showcase-examples>
 *     { "browser": ["Example 1", "Example 2"], "memory": ["Example 1"] }
 *   </script>
 * </section>
 *
 * State the script sets (style these in CSS):
 *   - `.is-active` + `aria-pressed="true"` on the active chip
 *   - `.is-active` on the active table cell
 *   - `.is-typing` on [data-showcase] while text is being typed or erased
 *     (use it to show the caret and pulse the typing dots)
 *   - `.is-reduced-motion` on [data-showcase] when the user prefers reduced motion
 */
(() => {
  const TYPE_MS = 35;        // per character
  const ERASE_MS = 12;       // per character
  const HOLD_MS = 3000;      // full text stays visible
  const RESUME_MS = 15000;   // autoplay resumes after this much idle time
  const FADE_MS = 200;       // reduced-motion crossfade
  const VISIBLE_THRESHOLD = 0.3;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  function initShowcase(root) {
    const textEl = root.querySelector('[data-showcase-text]');
    const chipsWrap = root.querySelector('[data-showcase-chips]');
    const dataEl = root.querySelector('[data-showcase-examples]');
    if (!textEl || !chipsWrap || !dataEl) {
      console.warn('[showcase] Missing required elements', root);
      return;
    }

    let examples;
    try {
      examples = JSON.parse(dataEl.textContent);
    } catch (e) {
      console.warn('[showcase] Invalid examples JSON', e);
      return;
    }

    const chips = [...chipsWrap.querySelectorAll('[data-feature]')];
    const cells = [...root.querySelectorAll('[data-showcase-table] [data-feature]')];
    const features = chips
      .map((c) => c.dataset.feature)
      .filter((f) => Array.isArray(examples[f]) && examples[f].length > 0);
    if (features.length === 0) return;

    // Screen readers get the full sentence once; the animated text is hidden from them.
    const live = document.createElement('span');
    live.setAttribute('aria-live', 'polite');
    live.style.cssText =
      'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;';
    root.appendChild(live);
    textEl.setAttribute('aria-hidden', 'true');

    const nextExample = Object.fromEntries(features.map((f) => [f, 0]));
    let current = 0;
    let runId = 0;            // increments on every new show(); stale runs stop themselves
    let busy = false;         // typing/erasing in progress
    let isVisible = false;
    let userPaused = false;
    let holdTimer = null;
    let resumeTimer = null;

    const canAutoplay = () => isVisible && !document.hidden && !userPaused;

    function pickExample(feature) {
      const list = examples[feature];
      const text = list[nextExample[feature] % list.length];
      nextExample[feature] += 1;
      return text;
    }

    function setActive(index) {
      const feature = features[index];
      chips.forEach((chip) => {
        const on = chip.dataset.feature === feature;
        chip.classList.toggle('is-active', on);
        chip.setAttribute('aria-pressed', String(on));
        if (on) scrollChipIntoView(chip);
      });
      cells.forEach((cell) => cell.classList.toggle('is-active', cell.dataset.feature === feature));
    }

    // Scroll only the chip row horizontally (never the page vertically).
    function scrollChipIntoView(chip) {
      if (chipsWrap.scrollWidth <= chipsWrap.clientWidth) return;
      const wrapRect = chipsWrap.getBoundingClientRect();
      const chipRect = chip.getBoundingClientRect();
      const left =
        chipsWrap.scrollLeft + (chipRect.left - wrapRect.left) - (wrapRect.width - chipRect.width) / 2;
      chipsWrap.scrollTo({ left, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    }

    async function typeText(text, id) {
      for (let i = 1; i <= text.length; i++) {
        if (id !== runId) return false;
        textEl.textContent = text.slice(0, i);
        await wait(TYPE_MS);
      }
      return id === runId;
    }

    async function eraseText(id) {
      let value = textEl.textContent;
      while (value.length > 0) {
        if (id !== runId) return false;
        value = value.slice(0, -1);
        textEl.textContent = value;
        await wait(ERASE_MS);
      }
      return id === runId;
    }

    async function fadeTo(text, id) {
      textEl.style.transition = `opacity ${FADE_MS}ms ease`;
      textEl.style.opacity = '0';
      await wait(FADE_MS);
      if (id !== runId) return false;
      textEl.textContent = text;
      textEl.style.opacity = '1';
      return true;
    }

    async function show(index) {
      const id = ++runId;
      clearTimeout(holdTimer);
      current = index;
      const text = pickExample(features[index]);
      setActive(index);

      busy = true;
      let done;
      if (reducedMotion.matches) {
        done = await fadeTo(text, id);
      } else {
        root.classList.add('is-typing');
        done = (await eraseText(id)) && (await typeText(text, id));
        if (id === runId) root.classList.remove('is-typing');
      }
      if (!done) return; // a newer show() took over
      busy = false;
      live.textContent = text;
      scheduleNext();
    }

    function scheduleNext() {
      clearTimeout(holdTimer);
      holdTimer = null;
      if (busy || !canAutoplay()) return;
      holdTimer = setTimeout(() => show((current + 1) % features.length), HOLD_MS);
    }

    function onUserSelect(feature) {
      const index = features.indexOf(feature);
      if (index === -1) return;
      userPaused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        userPaused = false;
        if (!busy && canAutoplay()) show((current + 1) % features.length);
      }, RESUME_MS);
      show(index);
    }

    // Clicks on chips only. Table cells are highlighted, never clickable.
    chipsWrap.addEventListener('click', (e) => {
      const target = e.target.closest('[data-feature]');
      if (target && chipsWrap.contains(target)) onUserSelect(target.dataset.feature);
    });

    // Pause when off-screen or when the tab is hidden.
    new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) scheduleNext();
        else clearTimeout(holdTimer);
      },
      { threshold: VISIBLE_THRESHOLD }
    ).observe(root);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearTimeout(holdTimer);
      else scheduleNext();
    });

    const syncMotionClass = () => root.classList.toggle('is-reduced-motion', reducedMotion.matches);
    reducedMotion.addEventListener('change', syncMotionClass);
    syncMotionClass();

    // Initial state: first feature, first example already in the HTML (works without JS too).
    setActive(0);
    const first = pickExample(features[0]);
    if (!textEl.textContent.trim()) textEl.textContent = first;
    live.textContent = textEl.textContent;
  }

  function initAll() {
    document.querySelectorAll('[data-showcase]').forEach(initShowcase);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
