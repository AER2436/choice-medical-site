# ⚡ Wheelchair Battery Charger Cheat Sheet

**System Voltage:** 24V Standard

> [!warning] CRITICAL WARNING
> 
> This guide applies to AGM, GEL, and Sealed Lead Acid batteries only.
> 
> DO NOT use these parameters for Lithium-Ion batteries. Lithium batteries require specific chargers to prevent fire hazards.

### Charger-to-Battery Match

> [!important] _The "Sweet Spot": Charger Amperage should be roughly 10–15% of the> Battery Ah._

|**Charger Output**|**Battery Capacity Range**|**Common Applications**|
|---|---|---|
|**24V - 2.0A**|**7Ah – 12Ah**|Small Travel Scooters / Portables|
|**24V - 3.5A**|**12Ah – 18Ah**|Mid-size Travel Scooters|
|**24V - 5.0A**|**20Ah – 45Ah**|Standard Group 2 Power Chairs (Most Common)|
|**24V - 8.0A**|**50Ah – 79Ah**|Group 3 Chairs / Heavy Duty|
|**24V - 10A**|**60Ah – 110Ah**|Bariatric / High-Performance Outdoor|

---

### 🔌 Connector Reference

Standard: 3-Pin XLR (Round)

Most power chairs use the Neutrik XLR standard.

- **Pin 1:** Positive (+)
    
- **Pin 2:** Negative (-)
    
- **Pin 3:** Inhibit (Prevents chair from driving while plugged in)
    

**Non-Standard:**

- **Coaxial (Barrel):** Usually found on very small, older travel scooters.
    
- **Clips/Square Plugs:** Specific to older proprietary brands (e.g., older Invacare or Everest & Jennings).
    

---

### 🛠️ Quick Diagnostics

1. **Charging Logic:**
    
    - **Charger too small?** Will take 12+ hours to charge; may not fully desulfate plates (shortens life).
        
    - **Charger too big?** Will overheat the battery, causing swelling or "gassing" (ruins battery).
        
2. **Troubleshooting:**
    
    - **Chair won't drive?** Unplug the charger. The "Inhibit" pin is doing its job.
        
    - **Charger light flashes immediately?** Usually indicates battery voltage is too low to detect (dead cells) or a loose connection.
        
    - **Charger gets hot?** Normal operating temperature can reach 140°F (60°C). If you can't touch it, it's too hot.
        

---

### 🧠 The "10% Rule"

If you encounter a battery size not listed above, use this formula:

$$Target\_Amps \approx Battery\_Ah \times 0.10$$

(Example: A 35Ah battery $\times$ 0.10 = 3.5A. You can safely round up to a 4A or 5A charger.)
