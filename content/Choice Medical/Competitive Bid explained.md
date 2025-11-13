The new Round of Competitive Bid proposal explained:
### Step 1: Suppliers Place Bids

Let’s say we’ve got **5 suppliers** bidding to provide oxygen concentrators in Miami:

- Supplier A: **$100**
    
- Supplier B: **$110**
    
- Supplier C: **$120**
    
- Supplier D: **$130**
    
- Supplier E: **$140**
    

---

### Step 2: CMS Chooses Enough to Cover the Area

CMS decides: “Okay, we need **3 suppliers** to cover this Competitive Bidding Area (CBA).”

- They take A, B, and C.
    
- Supplier C’s bid (**$120**) becomes the **clearing bid**.
    

---

### Step 3: How SPA Used to Work (Pre-2021)

Instead of paying suppliers their actual bids, CMS said:  
“Hmm… let’s take the **median** of accepted bids (A $100, B $110, C $120).”

- Median = **$110**.
    

So:

- Supplier A (who bid $100) gets **paid $110** – more than they asked for. 🎉
    
- Supplier B (who bid $110) gets **paid $110** – exactly what they bid. 😐
    
- Supplier C (who bid $120) gets **paid $110** – _less_ than they bid. 😡
    

---

### Step 4: Round 2021 Change

CMS said: “Fine, we’ll pay **100% of the clearing bid** instead.”  
So now:

- All three suppliers get **$120**.
    
- No one is underpaid relative to their bid.
    

---

### Step 5: CMS’s New Proposal (Going Forward)

CMS wants to bring the pain back:

1. **75th percentile method**: Pay less than clearing bid, plus cut the number of contracts.
    
2. **Median method below clearing bid**: Pay even less, but keep more suppliers.
    
3. **100% clearing bid with half the contracts**: Pay fairer rates, but kick half the suppliers out.
    

---

👉 So the ridiculous part is: under the old system, you could bid low, win a contract, and then get paid **more than you bid**, while your competitor who bid slightly higher gets paid **less than they bid**.  
It’s like showing up to a car auction, bidding $10,000 for a car, and the auctioneer says:  
“Congrats! You won. We’ll actually give you the car for $11,000.” 🚗💸

---


Let’s run the **Miami example** through this ridiculous CMS math machine. 🧮

---

## 📍 Setup: Miami Competitive Bidding Area

- Previous awards: **29 contracts**
    
- “Meaningful contributors” (those who did at least 5% of the volume): **9 suppliers**
    
- CMS assumes **5% fewer patients** in FFS (so they shave off a bit).
    

---

## ⚖️ Option 1: 50% SPA (Median Below Clearing Bid)

- CMS says: “We’ll keep more suppliers, but we’re gonna pay them less.”
    
- Calculation: 29 – 5% ≈ **27 contracts**
    
- SPA set at the **median of bids BELOW the clearing bid** (ouch).
    
- Outcome:
    
    - Lots of suppliers survive (27).
        
    - Payment rates are **suppressed downward**.
        
    - Basically: “Congratulations, you get a contract! …But don’t spend it all in one place.” 💸
        

---

## ⚖️ Option 2: 100% Clearing Bid (Half the Contracts)

- CMS says: “We’ll pay you fairly, but we’re cutting the party in half.”
    
- Calculation: (29 – 5%) * 0.5 ≈ **13 contracts**
    
- SPA set at the **clearing bid (100%)**.
    
- Outcome:
    
    - Only 13 suppliers left standing.
        
    - Rates are fairer — nobody gets paid less than they bid.
        
    - But half the suppliers get locked out completely.
        
    - Translation: “The money’s good… if you’re one of the chosen few.” 🎲
        

---

## ⚖️ Option 3: 75% SPA (CMS’s Favorite)

- CMS says: “We’ll do a little of both — fewer suppliers _and_ lower rates.”
    
- Calculation: (9 meaningful contributors × 2) – 5% ≈ **17 contracts**
    
- SPA set at the **75th percentile of bids**, relative to clearing bid.
    
- Outcome:
    
    - 17 contracts awarded.
        
    - Rates are **discounted again** (lower than clearing bid).
        
    - CMS gets its “downward trend” back.
        
    - Or in human terms: “We’ll starve you a little, but hey, at least we’re not starving _everyone_.” 🍽️
        

---

## 🎭 How It Feels

- **Option 1:** Everyone gets a ribbon, but your prize money shrank.
    
- **Option 2:** Half the players get kicked out, but the survivors actually get what they asked for.
    
- **Option 3 (CMS pick):** A middle ground where fewer contracts exist _and_ the rates are squeezed.
    

---

Here’s a toy numbers walk-through that shows exactly how the SPA would land under each option. same Miami spirit, smaller dataset so it’s easy to see what’s going on. 🧮

# Setup (toy example)

Ten bidders for the same item (sorted low → high):

`$95, $100, $104, $107, $112, $118, $121, $127, $133, $140`

Assume CMS decides it needs **5 suppliers** to cover the CBA.  
That means the **clearing bid** is the 5th accepted bid = **$112**.  
Accepted bidders (the first 5): **$95, $100, $104, $107, $112**

---

## How the SPA would be set under different rules

### A) Pre-2021 method (median of accepted bids)

- Median of the 5 accepted bids = the 3rd value = **$104**.
    
- **SPA = $104** (everyone gets $104).
    

**Impact**

- $95, $100, $104 bidders get paid **more** than they bid (🥳).
    
- $107 and $112 bidders get paid **less** than they bid (😬).
    

---

### B) Round 2021 method (100% of the clearing bid)

- **SPA = clearing bid = $112**.
    
- Everyone gets **$112**.
    

**Impact**

- No one is paid less than their bid among the accepted suppliers.
    
- Lower bidders ($95–$107) get paid **more** than they bid.
    

---

### C) CMS’s new proposals (illustrative math)

> These are **illustrative** using your summary of CMS-1828-P. The exact percentile mechanics in the final rule could be more fussy, but this shows the direction.

#### Option 1 — “50% SPA” flavor: **Median of bids _below_ the clearing bid**, keep (roughly) all contracts

- Bids **below** the clearing bid are: $95, $100, $104, $107 (4 numbers).
    
- Median of those four = average of the middle two = (100 + 104) / 2 = **$102**.
    
- **SPA ≈ $102**.
    

**Impact**

- Keeps more contracts (Miami framing ≈ 27).
    
- Pushes **rates down**: everyone gets ~$102, which is below the clearing bid ($112).
    

---

#### Option 2 — “100% clearing bid with ~50% contracts”

- Slash contracts to about half (Miami framing ≈ 13).
    
- **SPA = 100% of the clearing bid.**
    

In our toy, if CMS only “needs” **3 suppliers**, accepted are $95, $100, $104 → **clearing bid = $104**  
So **SPA = $104** (not $112 anymore because fewer suppliers means an earlier clearing point).

**Impact**

- **Fewer winners**, but the winners get **their clearing bid** (no discounting).
    
- Rate level depends on where the new (earlier) clearing bid lands; here it’s **$104**.
    

---

#### Option 3 — CMS’s preferred: **75th percentile relative to the clearing bid**, with fewer contracts

- Keep fewer contracts than old rounds (Miami framing ≈ 17).
    
- Set SPA near the **upper quartile** of accepted bids (discounted vs 100% clearing, but not as low as Option 1).
    

Using our 5 accepted bids ($95, $100, $104, $107, $112):

- 75th percentile position = (n+1)·0.75 = 6·0.75 = **4.5**
    
- Interpolate between 4th ($107) and 5th ($112):  
    $107 + 0.5·($112 − $107) = 107 + 2.5 = **$109.50**
    
- **SPA ≈ $109.50** (rounding to **$110** wouldn’t be shocking in practice).
    

**Impact**

- **Fewer contracts** than Option 1, **higher SPA** than Option 1, **lower SPA** than 100% clearing.
    
- CMS gets both levers: capacity control **and** some **rate discounting**.
    

---

## Quick side-by-side (with this exact toy data)

|Method|Contracts (Miami vibe)|SPA result in toy|Notes|
|---|---|---|---|
|Pre-2021 median of accepted|many|**$104**|pays some below their bids|
|2021: 100% clearing|—|**$112**|no one underpaid vs bid (given 5 accepted)|
|Option 1 (median below clearing)|~27|**$102**|keeps many suppliers, lowest rate|
|Option 2 (100% clearing, ~half contracts)|~13|**$104** (with 3 accepted)|fewer winners, fair to bids|
|Option 3 (75th percentile, fewer contracts)|~17|**$109.50** (~$110)|middle path: fewer suppliers + some discount|

---

## TL;DR vibes

- **More contracts** ⇒ **lower SPA** (Option 1).
    
- **Fewer contracts** ⇒ can keep **SPA at clearing** (Option 2) or **slightly below** it (Option 3).
    
- The “ridiculous” bit is still that under discounting methods, **what you bid** ≠ **what you’re paid**.
    
