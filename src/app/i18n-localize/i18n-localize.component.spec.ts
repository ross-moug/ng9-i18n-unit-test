import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nLocalizeComponent } from './i18n-localize.component';

describe('I18nLocalizeComponent', () => {
  let component: I18nLocalizeComponent;
  let fixture: ComponentFixture<I18nLocalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nLocalizeComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    $localize.calls.reset();
    $localize.and.returnValue('Hello World!)';

    fixture = TestBed.createComponent(I18nLocalizeComponent);
    component = fixture.componentInstance;
  });

  it('should call $localize once', () => {
    expect($localize).toHaveBeenCalledTimes(1);
  });
});
