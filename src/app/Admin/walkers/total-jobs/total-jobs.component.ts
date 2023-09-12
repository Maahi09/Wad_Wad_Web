import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WalkersService } from '../walkers.service';

@Component({
  selector: 'app-total-jobs',
  templateUrl: './total-jobs.component.html',
  styleUrls: ['./total-jobs.component.css'],
})
export class TotalJobsComponent {
  public walkerJobDetails: any;
  public jobId: number | undefined;
  @Input() jobDetails: any;
  updatedWalkerJobDetails: any;
  constructor(private router: Router) {}
  ngOnChanges(changes: any) {
    this.walkerJobDetails = changes.jobDetails.currentValue;
    this.updatedWalkerJobDetails = { ...this.walkerJobDetails };
    delete this.updatedWalkerJobDetails.CreatedAt;
    delete this.updatedWalkerJobDetails.ownerRate;
    delete this.updatedWalkerJobDetails.jobId;
    delete this.updatedWalkerJobDetails.ownerReview;
  }
  public openJobInDetail(jobId: number) {
    this.router.navigate(['job-details', jobId]);
  }
}
