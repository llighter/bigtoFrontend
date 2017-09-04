import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BigtoNavComponent } from './bigto-nav/bigto-nav.component';
import { BigtoFooterComponent } from './bigto-footer/bigto-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BigtoNavComponent,
    BigtoFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
