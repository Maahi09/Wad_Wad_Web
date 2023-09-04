import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WalkersService } from '../walkers.service';

@Component({
  selector: 'app-total-jobs',
  templateUrl: './total-jobs.component.html',
  styleUrls: ['./total-jobs.component.css'],
})
export class TotalJobsComponent {
  // public jobDetails:any;
  public jobId: any;
  @Input() jobDetails: any;
  constructor(private router: Router) {}
  public openJobInDetail(jobId: any) {
    this.router.navigate(['job-details', jobId]);
  }
}
