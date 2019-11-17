performance.mark('StartTask');
var origin = {
    //origin of axes
    x: 20,
    y: 100,
};
var chartData = [];
var loop = 2e2;
for (var i = 0; i < loop; i++) {
    //loop=5e6; will get Aw, Snap error for the following:
    // chartData.push({xVal: i, yVal:getRandomArbitrary(10,100)})
	
    //loop=5e6; is ok for Sin
    // var x = 2 * Math.PI * i / loop;
    // var y = Math.sin(x);
    var x = (800 * Math.PI * i) / loop + origin.x;
    var y = 100 * Math.sin(i) + origin.y;
    chartData.push({ xVal: x, yVal: y });
}
performance.mark('AfterComputation');
performance.measure('Measure_Computation', 'StartTask', 'AfterComputation');

var chart = new ej.charts.Chart(
    {
        primaryXAxis: {
            minimum: 0,
            maximum: 2550,
            interval: 500,
            lineStyle: { width: 0 },
            majorTickLines: { width: 1 },
            minorTickLines: { width: 1 },
        },
        primaryYAxis: {
            minimum: 0,
            maximum: 200,
            interval: 20,
            lineStyle: { width: 0 },
            majorTickLines: { width: 1 },
            minorTickLines: { width: 1 },
        },
        title: 'Chart Line Test from Javascritp',
        series: [
            {
                // dataSource for chart series
                dataSource: chartData,
                xName: 'xVal',
                yName: 'yVal',
                type: 'Line',
                name: 'Chart Line Test',
            },
        ],
    },
    '#element',
);
performance.mark('EndTask');
