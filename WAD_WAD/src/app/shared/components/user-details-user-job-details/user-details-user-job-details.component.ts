import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-user-details-user-job-details',
  templateUrl: './user-details-user-job-details.component.html',
  styleUrls: ['./user-details-user-job-details.component.css'],
})
export class UserDetailsUserJobDetailsComponent {
  public userId: any;
  isOwnerCall: any;
  constructor(private router: Router, public commonService: CommonService) {}
  ngOnInit() {
    this.getUserId();
  }
  openUserDetails() {
    if (this.commonService.disableUserJobDetails == false) {
      this.router.navigate(['user-details', this.userId, this.isOwnerCall]);
    }
  }
  openJobDetails() {
    if (this.commonService.disableUserJobDetails == false) {
      this.router.navigate([
        `walkers/user-job-details`,
        this.userId,
        this.isOwnerCall,
      ]);
      this.commonService.isActive = false;
    }
  }
  //method to get userId
  getUserId() {
    this.commonService.userId.subscribe((res: any) => (this.userId = res));
    this.isOwnerCall = this.commonService.isOwnerCall;
  }
}
