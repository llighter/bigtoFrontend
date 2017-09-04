import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BigtoNavComponent } from './bigto-nav/bigto-nav.component';
import { BigtoFooterComponent } from './bigto-footer/bigto-footer.component';
import { BigtoGraphComponent } from './bigto-graph/bigto-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    BigtoNavComponent,
    BigtoFooterComponent,
    BigtoGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
