import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProgressComponent } from './progress/progress.component';
import { DashborardComponent } from './dashborard/dashborard.component';
import { GraphComponent } from './graph/graph.component';
import { MainPageComponent } from './main-page.component';


@NgModule({
  declarations: [
    DashborardComponent,
    ProgressComponent,
    GraphComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    DashborardComponent,
    ProgressComponent,
    GraphComponent,
    MainPageComponent
  ]
})
export class PagesModule { }
