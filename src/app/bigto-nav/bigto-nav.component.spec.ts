import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigtoNavComponent } from './bigto-nav.component';

describe('BigtoNavComponent', () => {
  let component: BigtoNavComponent;
  let fixture: ComponentFixture<BigtoNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigtoNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigtoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
