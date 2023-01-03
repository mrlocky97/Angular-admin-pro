import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DashborardComponent } from './pages/dashborard/dashborard.component';
import { BreadcumbsComponent } from './shared/breadcumbs/breadcumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphComponent } from './pages/graph/graph.component';
import { MainPageComponent } from './pages/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundPageComponent,
    DashborardComponent,
    BreadcumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    GraphComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
