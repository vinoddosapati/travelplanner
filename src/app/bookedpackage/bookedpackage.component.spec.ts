import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedpackageComponent } from './bookedpackage.component';

describe('BookedpackageComponent', () => {
  let component: BookedpackageComponent;
  let fixture: ComponentFixture<BookedpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
