---
title: Tips
tags: [tag1, tag2]
draft: true
description: Short blurb
---


Here’s a **condensed, Quartz-safe Obsidian cheat sheet** — pocket-sized, no fluff:

---

# **Quartz-Compatible Obsidian Cheat Sheet (Condensed)**

## **File Basics**

* Use **lowercase-hyphens**: `my-note.md`
* Avoid spaces, emojis, special characters.
* Folder structure = site structure.

## **Frontmatter**

```yaml
---
title: Title Here
tags: [tag1, tag2]
draft: false
description: Short blurb
---
```

* Keep it simple—no Obsidian-only fields (`aliases`, `cssclass`, etc.) unless needed.

## **Links**

✔ `[[note-name]]`
✔ `[[folder/note-name]]`
✔ `[Text](../path/note-name.md)`
❌ `[[Note Name|Alias]]`
❌ Aliases in general.

## **Images**

✔ `![alt](../images/image.png)`
✔ `![[image.png]]` only if it lives somewhere Quartz can find (usually `static/`).

## **Avoid**

* Dataview, Canvas, block refs (`^id`), PDF embeds.
* Embedding whole notes: `![[note]]` → prefer linking.

## **Callouts**

✔ Standard ones:

```
> [!note] Works
```

❌ Custom callout types unless you styled them.

## **Tags**

Use in **frontmatter only**:

```yaml
tags: [project, reference]
```

## **Daily Notes**

Use simple filenames: `2025-11-13.md`

## **Recommended Obsidian Settings**

* Enable **Strict Markdown**.
* Disable “Automatically update internal links.”

---



