import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { I18nPolyfillComponent } from './i18n-polyfill/i18n-polyfill.component';
import { I18nLocalizeComponent } from './i18n-localize/i18n-localize.component';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    I18nPolyfillComponent,
    I18nLocalizeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
})
export class AppModule { }
