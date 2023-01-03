import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashborardComponent } from './pages/dashborard/dashborard.component';
import { GraphComponent } from './pages/graph/graph.component';
import { MainPageComponent } from './pages/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  { 
    path: '', component: MainPageComponent,
    children: [
      { path: 'dashboard', component: DashborardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graph', component: GraphComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ] 
  },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component:NotFoundPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
