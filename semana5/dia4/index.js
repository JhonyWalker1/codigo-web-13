/**
 * *chart es tipo bar
 */

const contenerdorBarChart = document.querySelector("#bar-chart").getContext("2d");

const barChart= new Chart(contenerdorBarChart, {
    type: "bar",
    data: {
        labels:[
            "lunes",
            "martes",
            "miercoles",
            "jueves",
            "viernes",
            "sabado",
            "domingo",
        ],
        datasets:[{
            label:"Numero de usuarios por dia",
            data: [20,40,10,100,50,75,200],
            borderWidth: 3,
            borderColor:"#000",
            backgroundColor:["#f05","#fe2","#454","#002","#a34","#234","#eda"]
        }]
    },
});

const containerDoughnutChart = document
.querySelector("#doughnut-chart")
.getContext("2d")

const dataForChart = {
    labels: [
        "computadoras",
        "celulares",
        "refrigeradoras",
        "parlantes"
    ],
    datasets:[
        {
            label: "PRODUCTOS ELECTRONICOS",
            data:[
                100,230,520,267,,
            ],
            backgroundColor: ["#f01", "green", "yellow", "blue","orange","black"],
        },
    ],
};
// esto es para crear el tipo y dar la config de datos
const config  = {
    type: "doughnut",
    data: dataForChart,
}
//esto es para la creacion
const donutChart = new Chart(containerDoughnutChart, config) 
    

const contenedorLineChart = document.querySelector("#lineal-chart").getContext("2d")
const configLineal = {
    type: "line",
    data: dataForChart,
};

const lineChart = new Chart(contenedorLineChart, configLineal)

const containerBubbleChart = document.querySelector("#bubble-chart").getContext("2d")


dataForChart.datasets[0].data = [
    {
        x:20,
        y:30,
        r:15,
    },
    {
        x:40,
        y:10,
        r:10,
    },
]

const configBubble ={
    type: "bubble",
    data : dataForChart,
};

const bubbleChart = new Chart(containerBubbleChart, configBubble)


const containerPolarChart = document.querySelector("#polar-chart").getContext("2d")

dataForChart.datasets[0].data= [300,149,321,678];

const configPolar = {
    type: "polarArea",
    data: dataForChart,
}

const polarChart = new Chart(containerPolarChart, configPolar)

const containerRadarChart = document.querySelector("#radar-chart")
const configRadarChart= {
    type: "radar",
    data: dataForChart,
}
const radarChart = new Chart(containerRadarChart, configRadarChart)


const containerScatterChart = document.querySelector("#scatter-chart").getContext("2d")

dataForChart.datasets[0].data= [
    {
    x:-10,
    y:10,
    },
    {
        x:20,
        y:50,
    },
]

const configScatter = {
    type: "scatter",
    data: dataForChart
}

const scatterChart = new Chart(containerScatterChart,configScatter)