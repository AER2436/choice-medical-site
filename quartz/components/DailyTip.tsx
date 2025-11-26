import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const tips = [
  "For PAP supplies, always verify the last DOS and F2F date before shipping.",
  "For SNF stays, check if Part A exhausted before billing DME to Part B.",
  "On Medicare Advantage claims, confirm if the plan follows FFS LCDs or has its own policy.",
  "Double-check that SWO and detailed written order diagnosis match the HCPCS billed.",
  "Before billing a wheelchair, confirm the patient’s height, weight, and home accessibility are documented.",
  "When restarting a capped rental after an insurance change, verify prior months paid and remaining cap months.",
  "For non-assigned claims, make sure the patient signs an ABN if coverage is uncertain.",
  "Always document medically necessary justification when coverage is borderline.",
]

const DailyTip: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div id="daily-tip" class="daily-tip">
      <strong>Daily Tip:</strong> <span id="daily-tip-text"></span>
    </div>
  )
}

// This runs in the browser after the DOM is ready
DailyTip.afterDOMLoaded = () => {
  const tipElement = document.getElementById("daily-tip-text")
  if (!tipElement) return

  const randomIndex = Math.floor(Math.random() * tips.length)
  tipElement.textContent = tips[randomIndex]!
}

export default (() => DailyTip) satisfies QuartzComponentConstructor

