import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HcGlobalComponent} from './hc-global.component';
import {HcGlobalRoutingModule} from './hc-global-routing.module';
import {Ng2HighchartsModule} from 'ng2-highcharts';
@NgModule({
    imports: [
        CommonModule,
        HcGlobalRoutingModule,
        Ng2HighchartsModule
    ],
    declarations: [HcGlobalComponent]
})
export class HcGlobalModule {}
