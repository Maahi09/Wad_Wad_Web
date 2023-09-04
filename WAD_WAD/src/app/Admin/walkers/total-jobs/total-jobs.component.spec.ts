import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalJobsComponent } from './total-jobs.component';

describe('TotalJobsComponent', () => {
  let component: TotalJobsComponent;
  let fixture: ComponentFixture<TotalJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalJobsComponent]
    });
    fixture = TestBed.createComponent(TotalJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
