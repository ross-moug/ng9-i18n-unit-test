import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I18nLocalizeTemplateComponent } from './i18n-localize-template/i18n-localize-template.component';

import { I18nPolyfillComponent } from './i18n-polyfill/i18n-polyfill.component';
import { I18nLocalizeComponent } from './i18n-localize/i18n-localize.component';

const routes: Routes = [
  {
    path: 'polyfill',
    component: I18nPolyfillComponent,
  },
  {
    path: 'localize',
    component: I18nLocalizeComponent,
  },
  {
    path: 'template',
    component: I18nLocalizeTemplateComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
