document.addEventListener('DOMContentLoaded', function () {
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

  const randomIndex = Math.floor(Math.random() * tips.length);
  const tipElement = document.getElementById("daily-tip-text");

  if (tipElement) {
    tipElement.textContent = tips[randomIndex];
  }
});

