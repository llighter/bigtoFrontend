import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigtoAnalysisComponent } from './bigto-analysis.component';

describe('BigtoAnalysisComponent', () => {
  let component: BigtoAnalysisComponent;
  let fixture: ComponentFixture<BigtoAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigtoAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigtoAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
