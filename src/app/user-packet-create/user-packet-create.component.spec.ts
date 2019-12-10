import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPacketCreateComponent } from './user-packet-create.component';

describe('UserPacketCreateComponent', () => {
  let component: UserPacketCreateComponent;
  let fixture: ComponentFixture<UserPacketCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPacketCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPacketCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
