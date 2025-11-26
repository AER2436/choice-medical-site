import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function DailyTip(_props: QuartzComponentProps) {
    return (
      <div class="daily-tip">
        <strong>Daily Tip:</strong> <span id="daily-tip-text"></span>
      </div>
    )
  }

  DailyTip.afterDOMLoaded = `
    const el = document.getElementById("daily-tip-text");
    if (!el) return;

    const tips = [
      "For PAP supplies, always verify the last DOS and F2F date before shipping.",
      "For SNF stays, check if Part A exhausted before billing DME to Part B.",
      "On Medicare Advantage claims, confirm if the plan follows FFS LCDs or has its own policy.",
      "Double-check that SWO and detailed written order diagnosis match the HCPCS billed.",
      "Before billing a wheelchair, confirm the patient’s height, weight, and home accessibility are documented.",
      "When restarting a capped rental after an insurance change, verify prior months paid and remaining cap months.",
      "For non-assigned claims, make sure the patient signs an ABN if coverage is uncertain.",
      "Always document medically necessary justification when coverage is borderline."
    ];

    const idx = Math.floor(Math.random() * tips.length);
    el.textContent = tips[idx] ?? "";
  `

  DailyTip.css = `
    .daily-tip {
      padding: 0.75rem 1rem;
      margin-bottom: 1.5rem;
      border-radius: 0.5rem;
      border-left: 4px solid #f59e0b;
      background: #fffbeb;
      font-size: 0.95rem;
    }
    .dark .daily-tip {
      background: #292524;
      border-left-color: #fbbf24;
    }
  `

  return DailyTip
}) satisfies QuartzComponentConstructor

