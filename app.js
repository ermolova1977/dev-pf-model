function runModel(){

let area = Number(document.getElementById("area").value)

let price = Number(document.getElementById("price").value)

let capex = Number(document.getElementById("capex").value)

let mortgage = Number(document.getElementById("mortgage").value)

let keyRate = Number(document.getElementById("keyRate").value)


let project = calculateProject(area,price,capex,mortgage,keyRate)

let bank = calculateBankMetrics(

project.revenue,
capex,
project.interest,
project.peakDebt

)

document.getElementById("revenue").innerText =
project.revenue.toLocaleString()

document.getElementById("profit").innerText =
bank.profit.toLocaleString()

document.getElementById("debt").innerText =
project.peakDebt.toLocaleString()

document.getElementById("coverage").innerText =
project.coverage.toFixed(2)

document.getElementById("rate").innerText =
(project.rate*100).toFixed(2)+" %"


document.getElementById("dscr").innerText =
bank.dscr.toFixed(2)

document.getElementById("equity").innerText =
(bank.equity*100).toFixed(1)+" %"

document.getElementById("ltc").innerText =
(bank.ltc*100).toFixed(1)+" %"


drawDebtChart(project.debtSeries)
drawEscrowChart(project.escrowSeries)

}
