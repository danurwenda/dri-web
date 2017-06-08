import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'app-two-panes',
    templateUrl: './two-panes.component.html',
    styleUrls: ['./two-panes.component.scss']
})
export class TwoPanesComponent implements OnInit {
    chartStock = {};
    constructor(private http: Http) {}

    ngOnInit() {
        this.http.get('./assets/stocks/mini.json').subscribe(
            (res: any) => {

                // split the data set into ohlc and volume
                var data = res.json(),
                    ohlc = [],
                    volume = [],
                    dataLength = data.length,
                    // set the allowed units for data grouping
                    groupingUnits = [[
                        'week',                         // unit name
                        [1]                             // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]],

                    i = 0;

                for (i; i < dataLength; i += 1) {
                    ohlc.push([
                        data[i][0], // the date
                        data[i][1], // open
                        data[i][2], // high
                        data[i][3], // low
                        data[i][4] // close
                    ]);

                    volume.push([
                        data[i][0], // the date
                        data[i][5] // the volume
                    ]);
                }


                // create the chart
                this.chartStock = {

                    rangeSelector: {
                        selected: 1
                    },

                    title: {
                        text: 'AAPL Historical'
                    },

                    yAxis: [{
                        labels: {
                            align: 'right',
                            x: -3
                        },
                        title: {
                            text: 'OHLC'
                        },
                        height: '60%',
                        lineWidth: 2
                    }, {
                        labels: {
                            align: 'right',
                            x: -3
                        },
                        title: {
                            text: 'Volume'
                        },
                        top: '65%',
                        height: '35%',
                        offset: 0,
                        lineWidth: 2
                    }],

                    tooltip: {
                        split: true
                    },

                    series: [{
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc,
                        dataGrouping: {
                            units: groupingUnits
                        }
                    }, {
                        type: 'column',
                        name: 'Volume',
                        data: volume,
                        yAxis: 1,
                        dataGrouping: {
                            units: groupingUnits
                        }
                    }]
                };
            },
            (err: any) => {console.error('Something went wrong', err)}
        );
    }

}
