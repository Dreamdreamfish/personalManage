// chart 绘制表格
Highcharts.chart('form-chart1', {
    chart: {
        animation: 'false',
        type: 'areaspline'
    },
    title: {
        text: 'SITE STATISTIC'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    xAxis: {
        categories: ['Mon', 'Tue', 'Wed','Thu','Fri','Sat', 'Sun']
    },
    yAxis: {
        title: {
            text: 'books units'
        }
    },
    tooltip: {
        shared: false,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.6
        }
    },
    series: [{
        name: 'Sales',
        color: '#73d7d1',
        data: [3, 4, 3, 5, 4, 10, 12]
    }, {
        name: 'Users',
        color: '#ffd876',
        data: [1, 3, 4, 3, 6, 5, 4]
    }]
});

Highcharts.chart('form-chart2', {
    chart: {
        animation: 'false',
        type: 'line',
        backgroundColor: '#8cc152',
    },
    title: {
        text: 'Yearly Sales',
        style: {
            color: '#FFFFFF'
        },
        align: 'left'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: ['1M','3M','5M','7M', '9M','11M']
    },
    yAxis: {
        gridLineColor: '#6ea037',
        tickPositions: [0, 20, 40, 60]
    },
    tooltip: {
        shared: false,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'sales',
        color: '#FFFFFF',
        tickColor: '#6ea037',
        data: [0, 20, 30, 40, 20, 50]
    }]
});

Highcharts.chart('chart1', {
    chart: {
        animation: 'false',
        type: 'areaspline'
    },
    title: {
        text: 'SITE STATISTIC'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    xAxis: {
        categories: ['Jan','Feb','Mar','Apr','May', 'Jun','Jul'],
    },
    yAxis: {
        title: {
            text: 'books units'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Sales',
        data: [3, 4, 3, 5, 4, 10, 12]
    }, {
        name: 'Users',
        data: [1, 3, 4, 3, 3, 5, 4]
    }]
});

Highcharts.chart('chart2', {
    chart: {
        animation: 'false',
        type: 'areaspline'
    },
    title: {
        text: 'SITE STATISTIC'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 70,
        y: 50,
        floating: true,
        borderWidth: 0,
        backgroundColor: '#FFFFFF'
    },
    xAxis: {
        categories: ['Mon', 'Tue', 'Wed','Thu','Fri','Sat', 'Sun']
    },
    yAxis: {
        title: {
            text: 'books units'
        }
    },
    tooltip: {
        shared: false,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.6
        }
    },
    series: [{
        name: 'Sales',
        color: '#73d7d1',
        data: [3, 4, 3, 5, 4, 10, 12]
    }, {
        name: 'Users',
        color: '#ffd876',
        data: [1, 3, 4, 3, 6, 5, 4]
    }]
});

Highcharts.chart('chart3', {
    chart: {
        animation: 'false',            
        type: 'column'
    },
    title: {
        text: 'SITE STATISTIC',
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 330,
        y: 20,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    xAxis: {
        categories: ['Jan','Feb','Mar','Apr','May', 'Jun','Jul', 'Aug', 'Sep', "Oct", "Nov", 'Dec']
    },
    yAxis: {
        tickPositions: [0, 100, 200, 300, 400, 500, 600, 700, 800]
    },
    tooltip: {
        shared: false,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Customers',
        color: '#ffce54',
        data: [240, 60, 80, 90, 180, 140, 300, 190, 220, 150, 180, 190]
    },{
        name: 'Users',
        color: '#3db9d3',
        data: [390, 140, 140, 140, 390, 300, 390, 390, 390, 300, 390, 390]
    }]
});

Highcharts.chart('chart4', {
    chart: {
        type: 'line',
        backgroundColor: '#9972b5'
    },
    title: {
        text: 'SITE STATISTIC',
        style: {
            color: '#c8b7d4'
        }
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: ['1M','3M','5M','7M', '9M','11M']
    },
    yAxis: {
        gridLineColor: '#c8b7d4',
        tickPositions: [0, 200, 400, 600, 800]
    },
    tooltip: {
        shared: false,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'sales',
        color: '#c8b7d4',
        tickColor: '#c8b7d4',
        data: [100, 310, 400, 300, 320, 120, 220]
    },{
        name: 'users',
        color: '#c8b7d4',
        tickColor: '#c8b7d4',
        data: [700, 490, 400, 500, 480, 680, 580]
    }]
});

Highcharts.chart('chart5', {
    chart: {
        type: 'spline',
    },
    title: {
        text: 'SITE STATISTIC'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: ['1M','3M','5M','7M', '9M','11M']
    },
    yAxis: {
        tickPositions: [0, 200, 400, 600, 800]
    },
    tooltip: {
        shared: false,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'sales',
        color: '#73cba7',
        data: [100, 310, 400, 300, 180, 320, 660]
    },{
        name: 'users',
        color: '#ffd876',
        data: [200, 490, 250, 500, 250, 480, 400]
    }]
});
