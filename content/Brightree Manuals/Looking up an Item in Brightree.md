---
title: Looking up an Item in Brightree
description: How to search for items using Item ID, Item Name, and Procedure Code in Brightree.
tags: [brightree, items, inventory, lookup, wildcard]
breadcrumbs:
  - "Brightree Guides"
  - "Inventory"
---

# Looking up an Item in Brightree

> [!summary] What This Guide Covers  
> How to locate items in Brightree using:  
> - **Item ID**  
> - **Item Name**  
> - **Procedure Code (HCPCS)**  
>  
> Includes wildcard search tips to avoid missed items.

---

# Wildcard Searching (MOST Important)

> [!important] Wildcard = Your Best Friend  
> Brightree requires **exact** matches unless you use wildcards.  
>  
> Use the wildcard symbol:  
>  
> **`*` = “anything goes here”**  
>  
> Example:  For the item named **E0143 - 30026**
> - Searching `30026` → ❌ No results  
> - Searching `*30026*` → ✅ Finds item E0143 – 30026  
>  
> ALWAYS use wildcards when you are unsure of spelling, formatting, or item structure.

---

# 1. Searching by Item ID

> [!tip] Best First Method  
> This is the **most accurate** and **fastest** search method.

Steps:

1. Click into **Item ID**  
2. Enter the ID (use wildcards when needed)  
3. Press **Enter** or click **Search**

If nothing appears:

> [!note]  
> Try **Item Name** next.

---

# 2. Searching by Item Name

> [!info] Good Backup Method  
> Use when Item ID is unknown or when Item ID search returns no results.

- Type part of the name  
- Use wildcards, e.g. `*walker*`  
- Expect **multiple items**, since names are not unique

---

# 3. Searching by Procedure Code (HCPCS)

> [!tip] Extremely Useful  
> Procedure codes help locate items even when names vary.

Steps:

1. Type the HCPCS into **Procedure Code**  
2. Select from dropdown  
3. Press **Search**

This will return **all items** tied to that HCPCS.

This is helpful because:

- Insurance billing uses HCPCS  
- Many retail items use `X9999`  
- Item names are inconsistent across vendors and staff

---

# Improving Search Results

> [!info] Filtering Tools  
> Narrow down search results by adding:

- Manufacturer  
- Vendor  
- Item Group  
- Item Category  

Good for “long list” searches.

---

# Important Notes

> [!important] Item ID Must Be Unique  
> Each Item ID is unique in Brightree.

> [!note] Item Names Are Not Unique  
> Many items may share the same name format.  
> Example: “rollator” may appear multiple times.

---

# FAQ

<details>
<summary><strong>Why didn’t my exact number return any results?</strong></summary>
Because Brightree requires **exact** formatting.  
If the item has letters, hyphens, or extra numbers, a plain number search will fail.  
Use a wildcard search like `*1234*`.
</details>

---

<details>
<summary><strong>Should I always start with Item ID?</strong></summary>
Yes. Item ID is the most exact match and returns the fewest false positives.
</details>

---

<details>
<summary><strong>Why do wildcard searches work better?</strong></summary>
Because data entry varied over the years.  
Wildcards allow Brightree to match the item **anywhere** in the field.
</details>

---

<details>
<summary><strong>What if I only know part of a code or name?</strong></summary>
Use contains searches such as:  
`*part*`  
</details>

---

<details>
<summary><strong>Why do I see X9999 on retail items?</strong></summary>
Retail and general store items often use the generic HCPCS code `X9999`.
</details>

