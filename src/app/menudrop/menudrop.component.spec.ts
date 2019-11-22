import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudropComponent } from './menudrop.component';

describe('MenudropComponent', () => {
  let component: MenudropComponent;
  let fixture: ComponentFixture<MenudropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
