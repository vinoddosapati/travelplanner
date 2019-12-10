import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatespecialholidayComponent } from './createspecialholiday.component';

describe('CreatespecialholidayComponent', () => {
  let component: CreatespecialholidayComponent;
  let fixture: ComponentFixture<CreatespecialholidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatespecialholidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatespecialholidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
