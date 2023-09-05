import { Component } from '@angular/core';
import { WalkersService } from '../walkers.service';
import { TitleService } from 'src/app/core/services/title.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/shared/services/common.service';
import { totalJob } from './user-job-details.model';

@Component({
  selector: 'app-user-job-details',
  templateUrl: './user-job-details.component.html',
  styleUrls: ['./user-job-details.component.css'],
})
export class UserJobDetailsComponent {
  public totalJobs: any;
  public userId: any;
  public isOwnerCall: any;
  constructor(
    private walkersService: WalkersService,
    private titleService: TitleService,
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.isOwnerCall = this.activatedRoute.snapshot.paramMap.get('isOwnerCall');
    this.getTotalJobs();
    this.sendUserId();
  }
  //method to get total-job
  getTotalJobs() {
    this.walkersService.getJobDetails().subscribe((res: totalJob) => {
      this.totalJobs = res?.data?.PetDetails;
      this.titleService.toggleTitle = true;
      this.commonService.walkerActive = true;
      this.walkersService.totalJobDetails.next(this.totalJobs);
      this.commonService.isActive = false;
      this.titleService.headerTitle = 'Walkers';
    });
  }
  // method to send userId and isOwnerCall
  sendUserId() {
    this.commonService.userId.next(this.userId);
  }
}
