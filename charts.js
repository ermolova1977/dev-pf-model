function drawDebtChart(series){

new Chart(

document.getElementById("debtChart"),

{

type:'line',

data:{

labels:series.map(x=>x.month),

datasets:[{

label:'Кредитная задолженность',

data:series.map(x=>x.value),

borderColor:'red'

}]

}

})

}



function drawEscrowChart(series){

new Chart(

document.getElementById("escrowChart"),

{

type:'line',

data:{

labels:series.map(x=>x.month),

datasets:[{

label:'Средства на эскроу счетах',

data:series.map(x=>x.value),

borderColor:'green'

}]

}

})

}
