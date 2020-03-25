import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nLocalizeTemplateComponent } from './i18n-localize-template.component';

describe('I18nLocalizeTemplateComponent', () => {
  let component: I18nLocalizeTemplateComponent;
  let fixture: ComponentFixture<I18nLocalizeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nLocalizeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nLocalizeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
