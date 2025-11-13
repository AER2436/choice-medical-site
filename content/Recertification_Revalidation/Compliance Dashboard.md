## Compliance Overview

<!-- 
HOW THIS TABLE WORKS NOW:

- Edit ONLY the dates in the table rows below.
- The script will:
  - Calculate days remaining
  - Set the Status emoji/text
  - Color the row (green / yellow / red)
  - Sort by Expires ascending
  - Show "Status as of YYYY-MM-DD" above the table

Status logic:
- ✅ Active = More than 120 days until Expires
- ⚠️ Renewal due = 120 days or less until Expires
- ❌ Expired = Past Expires date
-->

<div id="compliance-asof"></div>

<div id="compliance-table">

| Item                   | Renewal Date | Expires    | Days Remaining | Status |
| ---------------------- | ------------ | ---------- | -------------- | ------ |
| TMHP Bond              | 2026-02-07   | 2026-04-08 | (auto)         | (auto) |
| Medicare Bond          | 2026-05-03   | 2026-07-02 | (auto)         | (auto) |
| CEDI                   | 2026-07-03   | 2026-09-01 | (auto)         | (auto) |
| Liability Insurance    | 2026-07-26   | 2026-09-24 | (auto)         | (auto) |
| ATP Wells              | 2026-09-11   | 2026-11-10 | (auto)         | (auto) |
| Medical Device License | 2026-10-17   | 2026-12-16 | (auto)         | (auto) |
| HQAA Accreditation     | 2028-04-29   | 2028-06-28 | (auto)         | (auto) |
| REVALIDATION           | 2029-08-01   | 2029-09-30 | (auto)         | (auto) |
| Texas Sales Tax Permit | 9999-11-01   | 9999-12-31 | (auto)         | (auto) |

</div>

<script>
(function () {
  const container = document.getElementById("compliance-table");
  if (!container) return;

  const table = container.querySelector("table");
  if (!table) return;

  // "As of" timestamp
  const asOfEl = document.getElementById("compliance-asof");
  const today = new Date();
  if (asOfEl) {
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    asOfEl.textContent = `Status as of ${yyyy}-${mm}-${dd}`;
  }

  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  // Grab body rows
  const tbody = table.tBodies[0] || table;
  const rows = Array.from(tbody.querySelectorAll("tr"));

  // Compute info for each row
  const rowData = rows.map((row) => {
    const cells = row.querySelectorAll("td");
    if (cells.length < 5) return null;

    const item = cells[0].textContent.trim();
    const expiresText = cells[2].textContent.trim();
    if (!expiresText) return null;

    const expiresDate = new Date(expiresText + "T00:00:00");
    if (isNaN(expiresDate.getTime())) return null;

    const diffDays = Math.round((expiresDate - today) / MS_PER_DAY);

    let status = "";
    let bg = "";
    if (diffDays < 0) {
      status = "❌ Expired";
      bg = "rgba(255, 0, 0, 0.15)";
    } else if (diffDays <= 120) {
      status = "⚠️ Renewal due";
      bg = "rgba(255, 215, 0, 0.2)";
    } else {
      status = "✅ Active";
      bg = "rgba(0, 128, 0, 0.15)";
    }

    return {
      row,
      item,
      expiresDate,
      diffDays,
      status,
      bg,
    };
  }).filter(Boolean);

  // Sort by Expires ascending
  rowData.sort((a, b) => a.expiresDate - b.expiresDate);

  // Apply changes and reattach rows in sorted order
  rowData.forEach((info) => {
    const cells = info.row.querySelectorAll("td");
    // Days Remaining column (index 3)
    cells[3].textContent =
      info.diffDays < 0 ? `${Math.abs(info.diffDays)} days past` : `${info.diffDays}`;
    // Status column (index 4)
    cells[4].textContent = info.status;
    // Row color
    info.row.style.backgroundColor = info.bg;
    // Re-append row in sorted order
    tbody.appendChild(info.row);
  });
})();
</script>
