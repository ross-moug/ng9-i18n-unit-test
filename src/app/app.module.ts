import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { I18nPolyfillComponent } from './i18n-polyfill/i18n-polyfill.component';
import { I18nLocalizeComponent } from './i18n-localize/i18n-localize.component';
import { I18nLocalizeTemplateComponent } from './i18n-localize-template/i18n-localize-template.component';

@NgModule({
  declarations: [
    AppComponent,
    I18nPolyfillComponent,
    I18nLocalizeComponent,
    I18nLocalizeTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
})
export class AppModule { }
