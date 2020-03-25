import { Component } from '@angular/core';
import { I18n } from '@ngx-translate/i18n-polyfill';

@Component({
  selector: 'app-i18n-polyfill',
  templateUrl: './i18n-polyfill.component.html'
})
export class I18nPolyfillComponent {
  readonly title: string = this.i18n({
    id: 'title',
    value: 'Hello World!'
  });

  constructor(private i18n: I18n) {
  }
}
