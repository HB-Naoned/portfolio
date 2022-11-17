import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponentHome } from './home/app.component-home';
import { AppComponentFooter } from './footer/app.component-footer';
import { AppComponentHeader } from './header/app.component-header';

@NgModule({
  declarations: [
    AppComponentHome,
    AppComponentFooter,
    AppComponentHeader
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponentHome,AppComponentFooter,AppComponentHeader]
})
export class AppModule { }
