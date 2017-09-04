import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BigtoNavComponent } from './bigto-nav/bigto-nav.component';
import { BigtoFooterComponent } from './bigto-footer/bigto-footer.component';
import { BigtoGraphComponent } from './bigto-graph/bigto-graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MdSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BigtoService } from "./shared/bigto.service";
import { BigtoAlertComponent } from './bigto-alert/bigto-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    BigtoNavComponent,
    BigtoFooterComponent,
    BigtoGraphComponent,
    BigtoAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdSelectModule,
    HttpClientModule
  ],
  providers: [BigtoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
