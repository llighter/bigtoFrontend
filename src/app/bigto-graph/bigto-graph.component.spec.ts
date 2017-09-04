import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigtoGraphComponent } from './bigto-graph.component';

describe('BigtoGraphComponent', () => {
  let component: BigtoGraphComponent;
  let fixture: ComponentFixture<BigtoGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigtoGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigtoGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
