import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigtoHomeComponent } from './bigto-home.component';

describe('BigtoHomeComponent', () => {
  let component: BigtoHomeComponent;
  let fixture: ComponentFixture<BigtoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigtoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigtoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
