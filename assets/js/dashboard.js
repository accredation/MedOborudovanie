$(function () {


    var chart = {
        series: [
            {name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355, 390]},
            {name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250]},
        ],
        chart: {
            type: "bar",
            height: 345,
            offsetX: -15,
            toolbar: {show: true},
            foreColor: "#adb0bb",
            fontFamily: 'inherit',
            sparkline: {enabled: false},
        },
        colors: ["#5D87FF", "#49BEFF"],


        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "35%",
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            },
        },
        markers: {size: 0},

        dataLabels: {
            enabled: false,
        },


        legend: {
            show: false,
        },


        grid: {
            borderColor: "rgba(0,0,0,0.1)",
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },

        xaxis: {
            type: "category",
            categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
            labels: {
                style: {cssClass: "grey--text lighten-2--text fill-color"},
            },
        },


        yaxis: {
            show: true,
            min: 0,
            max: 400,
            tickAmount: 4,
            labels: {
                style: {
                    cssClass: "grey--text lighten-2--text fill-color",
                },
            },
        },
        stroke: {
            show: true,
            width: 3,
            lineCap: "butt",
            colors: ["transparent"],
        },


        tooltip: {theme: "light"},

        responsive: [
            {
                breakpoint: 600,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 3,
                        }
                    },
                }
            }
        ]


    };
    // =====================================
    // Profit
    // =====================================
    var chart1 = {
        series: [
            {name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355, 390]},
            {name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250]},
        ],

        chart: {
            type: "bar",
            height: 345,
            offsetX: -15,
            toolbar: {show: true},
            foreColor: "#adb0bb",
            fontFamily: 'inherit',
            sparkline: {enabled: false},
        },


        colors: ["#5D87FF", "#49BEFF"],


        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "35%",
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            },
        },
        markers: {size: 0},

        dataLabels: {
            enabled: false,
        },


        legend: {
            show: false,
        },


        grid: {
            borderColor: "rgba(0,0,0,0.1)",
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },

        xaxis: {
            type: "category",
            categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
            labels: {
                style: {cssClass: "grey--text lighten-2--text fill-color"},
            },
        },


        yaxis: {
            show: true,
            min: 0,
            max: 400,
            tickAmount: 4,
            labels: {
                style: {
                    cssClass: "grey--text lighten-2--text fill-color",
                },
            },
        },
        stroke: {
            show: true,
            width: 3,
            lineCap: "butt",
            colors: ["transparent"],
        },


        tooltip: {theme: "light"},

        responsive: [
            {
                breakpoint: 600,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 3,
                        }
                    },
                }
            }
        ]


    };

    var chart = new ApexCharts(document.querySelector("#chart"), chart);
    chart.render();

    var chart1 = new ApexCharts(document.querySelector("#chart1"), chart1);
    chart1.render();


    // =====================================
    // Breakup
    // =====================================
    // let arrCountAgr = [];
    // $.ajax({
    //     type: "GET",
    //     url: "getCountAgreement.php"
    // }).done(response => {
    //     arrCountAgr = JSON.parse(response);
    //     console.log(arrCountAgr);
    // })
    let agrAll = $("#doughnutChart1").get(0).getAttribute("attr1");
    let agrZakl = $("#doughnutChart1").get(0).getAttribute("attr2");
    var breakup = {
        color: "#adb5bd",
        series: [Number(agrZakl), Number(agrAll) - Number(agrZakl)],
        labels: ["заключено", "не заключено"],
        chart: {
            width: 180,
            type: "donut",
            fontFamily: "Plus Jakarta Sans', sans-serif",
            foreColor: "#adb0bb",
        },
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '75%',
                },
            },
        },
        stroke: {
            show: false,
        },

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        colors: ["#558f58", "#ecf2ff"],

        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 150,
                    },
                },
            },
        ],
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };
    let dveri = $("#doughnutChart2").get(0).getAttribute("attr1");
    let okna = $("#doughnutChart2").get(0).getAttribute("attr2");
    let zabor = $("#doughnutChart2").get(0).getAttribute("attr3");
    let krish = $("#doughnutChart2").get(0).getAttribute("attr4");
    var breakup1 = {
        color: "#adb5bd",
        series: [Number(dveri), Number(okna), Number(zabor), Number(krish)],
        labels: ["Двери", "Окна", "Заборы", "Крыши"],
        chart: {
            width: 180,
            type: "donut",
            fontFamily: "Plus Jakarta Sans', sans-serif",
            foreColor: "#adb0bb",
        },
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '75%',
                },
            },
        },
        stroke: {
            show: false,
        },

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        colors: ["#E75AD7", "#F30439", "#09E1FC", "#ECB023"],

        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 150,
                    },
                },
            },
        ],
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };

    var chartBreakup = new ApexCharts(document.querySelector("#breakup"), breakup);
    chartBreakup.render();
    var chartBreakup1 = new ApexCharts(document.querySelector("#breakup1"), breakup1);
    chartBreakup1.render();


    // =====================================
    // Earning
    // =====================================
    var earning = {
        chart: {
            id: "sparkline3",
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            group: "sparklines",
            fontFamily: "Plus Jakarta Sans', sans-serif",
            foreColor: "#adb0bb",
        },
        series: [
            {
                name: "Earnings",
                color: "#49BEFF",
                data: [25, 66, 20, 40, 12, 58, 20],
            },
        ],
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            colors: ["#f3feff"],
            type: "solid",
            opacity: 0.05,
        },

        markers: {
            size: 0,
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: true,
                position: "right",
            },
            x: {
                show: false,
            },
        },
    };
    new ApexCharts(document.querySelector("#earning"), earning).render();
})