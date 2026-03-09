function specialRate(coverage,keyRate){

let base = keyRate + 0.05

if(coverage>1.3) return 0.01
if(coverage>1.2) return 0.017
if(coverage>1.1) return 0.025
if(coverage>1.0) return 0.035

return base

}

function calculateBankMetrics(revenue,capex,interest,peakDebt){

let profit = revenue - capex - interest

let dscr = revenue/(interest+peakDebt*0.05)

let equity = (revenue-capex)/capex

let ltc = peakDebt/capex

return{

profit,
dscr,
equity,
ltc

}

}
