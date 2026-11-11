# My Claude Skills

A collection of custom skills for Claude / Claude Code.

## Available Skills

| Skill | Description |
| :--- | :--- |
| **`product-landing`** | Creates single-product marketing landing pages in a clean, minimal style |

---

## Quick Download (Single Skill)

Downloads one skill folder into your current directory.

**To choose a skill, change the `SKILL` value on the first line** to a folder name from the table above, e.g. `product-landing`. Leave the rest of the command as is.

### macOS / Linux

```bash
SKILL=product-landing
curl -fsSL https://github.com/whicencer/my-claude-skills/archive/refs/heads/main.tar.gz | tar -xz --strip-components=1 "my-claude-skills-main/$SKILL"
```

### Windows (PowerShell)

```powershell
$SKILL = "product-landing"
curl.exe -fsSL -o "$env:TEMP\skills.tar.gz" https://github.com/whicencer/my-claude-skills/archive/refs/heads/main.tar.gz
tar.exe -xzf "$env:TEMP\skills.tar.gz" --strip-components=1 "my-claude-skills-main/$SKILL"
Remove-Item "$env:TEMP\skills.tar.gz"
```

### Windows (CMD)

```bat
set SKILL=product-landing
curl.exe -fsSL https://github.com/whicencer/my-claude-skills/archive/refs/heads/main.tar.gz | tar.exe -xz --strip-components=1 "my-claude-skills-main/%SKILL%"
```
