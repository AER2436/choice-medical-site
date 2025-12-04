---
title: How to Create a Patient Chart in Brightree
description: Step-by-step guide for creating a new patient record in Brightree.
tags: [brightree, patient-chart, how-to, dme]
---

# How to Create a Patient Chart in Brightree


The first thing to remember when creating a new patient chart in Brightree is to **make sure the patient doesn’t already exist** in the system.

---

## Step 1 — Navigate to the Patient Search

1. From the Brightree menu, click the **hamburger menu**.
2. Select **Ordering → Patients**.

Use the **Quick Lookup** box to search by the patient’s last name.

- **If the patient already exists:** select the patient and continue with creating the sales order.
- **If the patient does not exist:** click **Add Patient** to create a new chart.

> **Note:** A chart does *not* become permanent until you press **SAVE**.  
> Even switching tabs will auto-save, but closing the chart before saving will lose all entered information.

---

## Step 2 — Follow the Tabs Left to Right  
Each tab builds on information from the previous one.  
Skipping tabs can cause **billing errors**, so always proceed in order.

---

# Personal Tab (Required Fields)

Enter the patient’s demographic information.

Required fields include:

- **Last Name**
- **First Name**
- **Birthdate**
- **Billing Address**
- **Delivery Address**

### Important Notes

- **Delivery Address** should be the patient’s *permanent* residence, not a temporary location such as a hospital or nursing home.
- For patients with a **P.O. Box**:
  - Use P.O. Box as the **mailing address**
  - Use the physical location as the **delivery address**
- If mailing and delivery addresses are the same, fill out Billing Address and then click **Same as Billing Address**.

When finished, click the **Contacts** tab.

---

# Contacts Tab

Enter:

- Emergency contact information  
- Responsible Party information (for minors)

When done, click the **Clinical** tab.

---

# Clinical Tab

Important fields to complete:

- **Gender** (required before completing the Insurance tab)
- **Height and Weight**
- **Ordering Doctor** (from the Written Order)
- **Primary Doctor** (or click “Same as Ordering Doctor” if applicable)
- **ICD-10 Diagnosis Codes**

### Diagnosis Code Notes

- Type each ICD-10 code and select it from the dropdown.
- **Primary Diagnosis** must be in position 1.
- Medicare and most insurances allow **up to four** diagnosis codes.
- ICD-9 fields can be ignored—they remain for legacy purposes.

### Optional:
- Check **Infectious Condition** if applicable.  
  This subtly marks the delivery ticket for technician safety.

When complete, click the **Insurance** tab.

---

# Insurance Tab

Click **Add Policy** to begin entering insurance information.

Fields to complete:

- **Payor Level** (Primary, Secondary, Tertiary)
- **Insurance** (begin typing and select from dropdown)
- **Start Date**  
  - Typically enter a placeholder such as **01/01/1980**, or if you know it, go ahead and enter it
- **Policy Number**
- **Relationship** (usually “Self”)  
  - If not Self, fill in the yellow highlighted fields

Click **SAVE** when finished.

### Eligibility Checks

Depending on the payer:

- If **Electronic Eligibility Check** is available:
  1. Click **Electronic Eligibility Check**
  2. Select **VERIFY ELIGIBILITY**
- If it is **grayed out**, use **Manual Eligibility Check**
  - Select **Eligible**
  - Press **SAVE**

Repeat these steps for each additional insurance policy.

---

# Completion

Once all policies are entered and saved, the patient chart is complete and you may begin creating the sales order.

# FAQ — Creating a Patient Chart in Brightree

<details>
<summary><strong>How do I check if a patient already exists in Brightree?</strong></summary>

Go to **Ordering → Patients**, then use the **Quick Lookup** box to search by last name.  
If the patient appears, select them and continue the workflow — no need to create a new chart.

</details>

---

<details>
<summary><strong>When does a new patient chart become permanent?</strong></summary>

Only after you press **SAVE**, *or* when you move to another tab (Brightree auto-saves on tab change).  
Closing the chart before saving will delete all entered information.

</details>

---

<details>
<summary><strong>Why is it important to complete the tabs in order?</strong></summary>

Each tab builds on the previous one.  
Skipping tabs (e.g., jumping directly to Insurance) can cause **billing errors**, missing fields, or workflow failures.

</details>

---

<details>
<summary><strong>What fields are required on the Personal tab?</strong></summary>

- Last Name  
- First Name  
- Birthdate  
- Billing Address  
- Delivery Address (must be the patient’s permanent residence)

</details>

---

<details>
<summary><strong>Can I use a hospital or nursing home address as the Delivery Address?</strong></summary>

No. Delivery Address must be the patient’s **permanent residence**.  
Temporary facilities should be added later on delivery tickets, not in the chart.

</details>

---

<details>
<summary><strong>How should I enter addresses for patients with a P.O. Box?</strong></summary>

- **Mailing Address:** P.O. Box  
- **Delivery Address:** Physical home  
If they match, use **Same as Billing Address**.

</details>

---

<details>
<summary><strong>What goes on the Contacts tab?</strong></summary>

Emergency contacts or Responsible Party information if the patient is a minor.

</details>

---

<details>
<summary><strong>What information must I complete on the Clinical tab?</strong></summary>

- Gender  
- Height & Weight  
- Ordering Doctor  
- Primary Doctor (or “Same as Ordering”)  
- ICD-10 diagnosis codes (up to 4)

</details>

---

<details>
<summary><strong>How many ICD-10 codes can I enter?</strong></summary>

Medicare and most payers accept **up to four**.  
The **primary diagnosis** must be in the first position.

</details>

---

<details>
<summary><strong>Do I need to enter ICD-9 codes?</strong></summary>

No. ICD-9 is a legacy field and can be ignored.

</details>

---

<details>
<summary><strong>What does the “Infectious Condition” checkbox do?</strong></summary>

It marks the delivery ticket to alert technicians to take extra precautions.  
It does **not** affect billing.

</details>

---

<details>
<summary><strong>How do I add insurance to a patient chart?</strong></summary>

On the **Insurance** tab:

1. Click **Add Policy**  
2. Enter Payor Level  
3. Search + select the Insurance  
4. Add Start Date  
5. Enter Policy Number  
6. Select Relationship  

</details>

---

<details>
<summary><strong>Why is the Electronic Eligibility Check button sometimes greyed out?</strong></summary>

The insurance does not support electronic verification through Brightree.  
Use **Manual Eligibility Check**, choose **Eligible**, and click **Save**.

</details>

---

<details>
<summary><strong>What should I do if eligibility returns “Not Eligible”?</strong></summary>

Check with intake to re-verify the insurance.  
Also confirm Relationship, Policy Number, and Start Date are correct.

</details>

---

<details>
<summary><strong>How do I complete eligibility verification when available?</strong></summary>

1. Click **Electronic Eligibility Check**  
2. Click **VERIFY ELIGIBILITY**  

Brightree will contact the payer and return the response.

</details>

---

<details>
<summary><strong>What do I do after adding all insurance policies?</strong></summary>

Once all policies are added and saved, the patient chart is complete and you may begin creating the **sales order**.

</details>
