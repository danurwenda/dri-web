import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2HighchartsModule} from 'ng2-highcharts';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';

import {StatModule} from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2HighchartsModule,
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {}
