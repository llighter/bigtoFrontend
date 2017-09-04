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
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";

const appRoutes: Routes = [
  { path: 'graph', component: BigtoGraphComponent },
  { path: 'home', component: BigtoHomeComponent },
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
    BigtoLoginComponent
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
  providers: [BigtoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
