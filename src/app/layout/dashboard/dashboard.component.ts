import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    chartStock = {};
    constructor(private http: Http) {

    }
    ngOnInit() {
        this.initChart();
        
        // alerts
        this.alerts.push(
            {
                id: 1,
                type: 'info',
                message: `Libur lebaran dari tanggal 23 s.d 30 Juni. Services will be unavailable during the time.`,
            }
        );
    }

    /**
     * TODO : this default chart on Dashboard should be customizable by user
     */
    private initChart() {
        // init chart
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

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
