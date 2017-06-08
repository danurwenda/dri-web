import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcGlobalComponent } from './hc-global.component';

describe('HcGlobalComponent', () => {
  let component: HcGlobalComponent;
  let fixture: ComponentFixture<HcGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
