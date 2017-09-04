import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigtoLoginComponent } from './bigto-login.component';

describe('BigtoLoginComponent', () => {
  let component: BigtoLoginComponent;
  let fixture: ComponentFixture<BigtoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigtoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigtoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
