import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2HighchartsModule} from 'ng2-highcharts';
import {BlankPageRoutingModule} from './blank-page-routing.module';
import {BlankPageComponent} from './blank-page.component';

@NgModule({
    imports: [
        CommonModule,
        BlankPageRoutingModule,
        Ng2HighchartsModule
    ],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
