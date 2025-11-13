## Compliance Overview
```dataview
TABLE WITHOUT ID
  replace(file.name, ".md", "") AS "Item",
  dateformat(expires - dur(60 days), "yyyy-MM-dd") AS "Renewal Date",
  dateformat(expires, "yyyy-MM-dd") AS "Expires",
  choice(
    date(expires) <= date(today),
      "<span class='dv-badge dv-badge-expired'>❌ Expired</span>",
    choice(
      date(expires) <= (date(today) + dur(120 days)),
      "<span class='dv-badge dv-badge-soon'>⚠️ Renewal due soon</span>",
      "<span class='dv-badge dv-badge-active'>✅ Active</span>"
    )
  ) AS "Status"
FROM "Recertification_Revalidation"
WHERE expires AND !startswith(file.name, "_")
SORT expires ASC

```







