import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { I18n, I18nDef } from '@ngx-translate/i18n-polyfill';
import { I18nPolyfillComponent } from './i18n-polyfill.component';
import Spy = jasmine.Spy;

describe('I18nPolyfillComponent', () => {
  let component: I18nPolyfillComponent;
  let fixture: ComponentFixture<I18nPolyfillComponent>;

  let mockI18n: Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [I18nPolyfillComponent],
      providers: [
        {
          provide: I18n,
          useValue: jasmine.createSpy('I18n'),
        },
      ],
    })
      .compileComponents().then(() => {
        mockI18n = TestBed.inject(I18n) as Spy;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nPolyfillComponent);
    component = fixture.componentInstance;

    mockI18n.and.callFake((def: I18nDef) => def.value);
  });

  it('should call i18n once', () => {
    expect(mockI18n).toHaveBeenCalledTimes(1);
  });
});
