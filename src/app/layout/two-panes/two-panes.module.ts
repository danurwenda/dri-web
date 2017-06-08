import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2HighchartsModule} from 'ng2-highcharts';
import {TwoPanesRoutingModule} from './two-panes-routing.module';
import {TwoPanesComponent} from './two-panes.component';

@NgModule({
    imports: [
        CommonModule,
        TwoPanesRoutingModule,
        Ng2HighchartsModule
    ],
    declarations: [TwoPanesComponent]
})
export class TwoPanesModule {}
