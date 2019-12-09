import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreatedPackageComponent } from './view-created-package.component';

describe('ViewCreatedPackageComponent', () => {
  let component: ViewCreatedPackageComponent;
  let fixture: ComponentFixture<ViewCreatedPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCreatedPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCreatedPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
