import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    chartStock = {};
    constructor(private http: Http) {}
    ngOnInit() {
        this.tripleStock()
    }

    simpleStock() {
        //Stock
        this.http.get('./assets/stocks/msft-c.json').subscribe(
            (aaplc: any) => {
                this.chartStock = {
                    rangeSelector: {
                        selected: 1
                    },
                    title: {
                        text: 'AAPL Stock Price'
                    },
                    series: [{
                        name: 'AAPL',
                        data: aaplc.json(),
                        tooltip: {
                            valueDecimals: 2
                        }
                    }]
                };
            },
            (err: any) => {
                console.error('Somethin went wrong', err);
            }
        );
    }

    seriesOptions = [];
    seriesCounter = 0;
    names = ['MSFT', 'AAPL', 'GOOG'];
    tripleStock() {
        this.names.forEach((name, index) => {
            this.http.get('./assets/stocks/' + name.toLowerCase() + '-p.json').subscribe(
                (data: any) => {
                    this.seriesOptions[index] = {
                        name: name,
                        data: data.json()
                    };

                    // As we're loading the data asynchronously, we don't know what order it will arrive. So
                    // we keep a counter and create the chart when all the data is loaded.
                    this.seriesCounter += 1;

                    if (this.seriesCounter === this.names.length) {
                        this.createChart();
                    }
                },
                (err: any) => {
                    console.error('Somethin went wrong', err);
                }
            );
        })

    }
    createChart() {
        this.chartStock = {
            rangeSelector: {
                selected: 4
            },

            yAxis: {
                labels: {
                    formatter: function () {
                        return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'
                }]
            },

            plotOptions: {
                series: {
                    compare: 'percent',
                    showInNavigator: true
                }
            },

            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2,
                split: true
            },

            series: this.seriesOptions
        };
    }
}
