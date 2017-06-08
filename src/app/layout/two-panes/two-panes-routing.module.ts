import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TwoPanesComponent} from './two-panes.component';

const routes: Routes = [
    { path: '', component: TwoPanesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TwoPanesRoutingModule { }
