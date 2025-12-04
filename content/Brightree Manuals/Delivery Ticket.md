---
title: Delivery Ticket Instructions (Brightree)
description: Step-by-step guide for creating delivery tickets and sales orders in Brightree.
tags: [brightree, delivery-ticket, sales-order, how-to, dme]
breadcrumbs:
  - "Brightree Guides"
  - "Delivery Ticket Instructions"
---

# Delivery Ticket Instructions

> [!summary] Purpose
> This guide explains how to create Delivery Tickets and Sales Orders in Brightree, including patient lookup, navigation, insurance selection, item entry, and workflow rules.

---

## Step 1 — Look Up the Patient

1. Open the **hamburger menu** in Brightree.  
2. Select **ORDERING → PATIENTS**.  
3. Use the **Quick Lookup** box to search for the patient:
   - Enter LAST NAME
   - Use formats like: `SMITH`, `SMITH,JOHN`, `SMI,J`, `S,JOH`
   - You may also enter the **Patient ID Number**

When the patient appears, click **NEW SALES ORDER**.

- A blank Sales Order opens.
- **Scheduled Date** defaults to today; change if needed.
- **Delivery Note** → prints on the delivery ticket (use sparingly).
- **Order Note** → internal information only (does **not** print).

---

## Step 2 — Move to the Clinical Tab

> [!warning] IMPORTANT  
> You must move through tabs **left → right** in order to avoid data or billing errors.

On the Clinical tab:

- Doctor and diagnosis codes auto-populate.
- Update if the information does not match the Written Order or specific equipment being provided.

---

## Step 3 — Insurance Tab

Insurance information pulls from the patient chart.

### For private pay:
- Uncheck **Include this Payor Level on Sales Order** on all payors.

### For insurance orders:
- Make sure the appropriate payor levels are checked.
- Confirm the **PAY PCT**:
  - Medicare → 80%
  - Commercial/Other → 100%

Mark **INSURANCE VERIFIED** once validated.

---

## Step 4 — Items Tab

This is where you add equipment or services.

### Option A — Quick Add (fastest, least used)
- Requires exact **Item ID** or barcode.
- Choose rental/purchase, quantity, and ID.
- Click **QUICK ADD**.

### Option B — Add Item (most common)
- Click **ADD ITEM** in the upper-right corner.
- Use the search tools to find items by name, category, or description.

---

# FAQ — Delivery Tickets & Sales Orders (Collapsible)

<details>
<summary><strong>How do I find the patient before creating a delivery ticket?</strong></summary>
Go to Ordering → Patients, then search by last name, partial name, or Patient ID.
</details>

---

<details>
<summary><strong>What is the quickest way to search for a patient?</strong></summary>
Use the Quick Lookup box—Brightree auto-suggests after three characters and supports formats like LAST,FIRST or partial initials.
</details>

---

<details>
<summary><strong>Why shouldn’t I enter the Actual Date on a Sales Order?</strong></summary>
Actual Date is used for billing and POD processing. Entering it early can interfere with delivery workflows.
</details>

---

<details>
<summary><strong>What’s the difference between Delivery Notes and Order Notes?</strong></summary>
Delivery Notes print on the delivery ticket; Order Notes are internal only and do not print.
</details>

---

<details>
<summary><strong>Why must I move left-to-right through the tabs?</strong></summary>
Each tab feeds information into the next. Skipping tabs can create billing errors or missing data.
</details>

---

<details>
<summary><strong>What does the PAY PCT value mean?</strong></summary>
It is the payer’s allowed percentage: 80% for Medicare; 100% for most commercial payers.
</details>

---

<details>
<summary><strong>What does the “Insurance Verified” box do?</strong></summary>
It confirms active coverage and must be completed before finalizing the order.
</details>

---

<details>
<summary><strong>When should I use Quick Add?</strong></summary>
Use Quick Add only when you know the exact Item ID or barcode. Otherwise, use Add Item for safer search.
</details>
