import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HcGlobalComponent} from './hc-global.component';

const routes: Routes = [
    { path: '', component: HcGlobalComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HcGlobalRoutingModule { }
