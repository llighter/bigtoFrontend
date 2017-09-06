import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BigtoNavComponent } from './bigto-nav/bigto-nav.component';
import { BigtoFooterComponent } from './bigto-footer/bigto-footer.component';
import { BigtoGraphComponent } from './bigto-graph/bigto-graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdDatepickerModule, MdNativeDateModule, MdSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BigtoService } from "./shared/bigto.service";
import { BigtoAlertComponent } from './bigto-alert/bigto-alert.component';
import { RouterModule, Routes} from "@angular/router";
import { BigtoHomeComponent } from './bigto-home/bigto-home.component';
import { BigtoLoginComponent } from './bigto-login/bigto-login.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {environment} from "../environments/environment.prod";
import {AuthService} from "./shared/auth.service";
import { BigtoAnalysisComponent } from './bigto-analysis/bigto-analysis.component';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { Report3Component } from './report3/report3.component';
import { Report4Component } from './report4/report4.component';

const appRoutes: Routes = [
  { path: 'graph', component: BigtoGraphComponent },
  { path: 'home', component: BigtoHomeComponent },
  { path: 'login', component: BigtoLoginComponent },
  { path: 'analysis', component: BigtoAnalysisComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BigtoNavComponent,
    BigtoFooterComponent,
    BigtoGraphComponent,
    BigtoAlertComponent,
    BigtoHomeComponent,
    BigtoLoginComponent,
    BigtoAnalysisComponent,
    Report1Component,
    Report2Component,
    Report3Component,
    Report4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purpose only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [BigtoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
