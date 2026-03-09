function calculateProject(area,price,capex,mortgage,keyRate){

let revenue = area * price

let debt=0
let escrow=0

let peakDebt=0
let interest=0

let debtSeries=[]
let escrowSeries=[]

for(let m=1;m<=24;m++){

let capexMonth = capex/24
debt += capexMonth

if(debt>peakDebt) peakDebt = debt

let sales = revenue/24
escrow += sales

let f = sales*(1-mortgage)
let f2 = sales*mortgage

let coverage = (f + 0.5*f2)/debt

let rate = specialRate(coverage,keyRate)

let i = debt*rate/12
interest += i

debtSeries.push({month:m,value:debt})
escrowSeries.push({month:m,value:escrow})

}

return{

revenue,
interest,
peakDebt,
coverage,
rate,
debtSeries,
escrowSeries

}

}
