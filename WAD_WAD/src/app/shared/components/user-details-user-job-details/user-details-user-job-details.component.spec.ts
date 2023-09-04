import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsUserJobDetailsComponent } from './user-details-user-job-details.component';

describe('UserDetailsUserJobDetailsComponent', () => {
  let component: UserDetailsUserJobDetailsComponent;
  let fixture: ComponentFixture<UserDetailsUserJobDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsUserJobDetailsComponent]
    });
    fixture = TestBed.createComponent(UserDetailsUserJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
