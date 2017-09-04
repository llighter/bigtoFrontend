import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigtoFooterComponent } from './bigto-footer.component';

describe('BigtoFooterComponent', () => {
  let component: BigtoFooterComponent;
  let fixture: ComponentFixture<BigtoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigtoFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigtoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
