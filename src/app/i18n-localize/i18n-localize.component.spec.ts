import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nLocalizeComponent } from './i18n-localize.component';

xdescribe('I18nLocalizeComponent', () => {
  let component: I18nLocalizeComponent;
  let fixture: ComponentFixture<I18nLocalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nLocalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nLocalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
