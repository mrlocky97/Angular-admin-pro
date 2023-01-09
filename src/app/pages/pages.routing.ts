import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page.component';
import { DashborardComponent } from './dashborard/dashborard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphComponent } from './graph/graph.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';

const routes: Routes = [
    {
        path: 'dashboard', component: MainPageComponent,
        children: [
            { path: '', component: DashborardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graph', component: GraphComponent },
            { path: 'account-settings', component: AcountSettingsComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
