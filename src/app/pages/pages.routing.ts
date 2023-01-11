import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page.component';
import { DashborardComponent } from './dashborard/dashborard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphComponent } from './graph/graph.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path: 'dashboard', component: MainPageComponent,
        children: [
            { path: '', component: DashborardComponent, data: { title: 'dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { title: 'progress' } },
            { path: 'graph', component: GraphComponent, data: { title: 'graph' } },
            { path: 'account-settings', component: AcountSettingsComponent, data: { title: 'account-settings' } },
            { path: 'promises', component: PromisesComponent, data: { title: 'promises' } },
            { path: 'rxjs', component: RxjsComponent, data: { title: 'rxjs' } }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
