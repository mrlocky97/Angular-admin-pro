import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page.component';
import { DashborardComponent } from './dashborard/dashborard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
    {
        path: 'dashboard', component: MainPageComponent,
        children: [
            { path: '', component: DashborardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graph', component: GraphComponent },
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
