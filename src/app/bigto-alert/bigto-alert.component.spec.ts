import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigtoAlertComponent } from './bigto-alert.component';

describe('BigtoAlertComponent', () => {
  let component: BigtoAlertComponent;
  let fixture: ComponentFixture<BigtoAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigtoAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigtoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
