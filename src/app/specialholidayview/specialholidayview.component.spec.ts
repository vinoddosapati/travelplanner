import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialholidayviewComponent } from './specialholidayview.component';

describe('SpecialholidayviewComponent', () => {
  let component: SpecialholidayviewComponent;
  let fixture: ComponentFixture<SpecialholidayviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialholidayviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialholidayviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
