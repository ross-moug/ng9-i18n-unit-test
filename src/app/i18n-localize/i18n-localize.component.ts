import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-localize',
  templateUrl: './i18n-localize.component.html'
})
export class I18nLocalizeComponent {
  readonly title: string = $localize `:@@title:Hello World!`;
}
