import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPanesComponent } from './two-panes.component';

describe('TwoPanesComponent', () => {
  let component: TwoPanesComponent;
  let fixture: ComponentFixture<TwoPanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
