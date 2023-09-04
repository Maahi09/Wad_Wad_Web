import { Component } from '@angular/core';
import { WalkersService } from '../walkers.service';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/core/services/title.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent {
  public jobId: any;
  public petDetails: any;
  public petInfo: any;
  public walkerData: any;
  updatedPetInfo: any;
  updatedWalkerData: any;
  constructor(
    private walkersService: WalkersService,
    private activatedRoute: ActivatedRoute,
    private titleService: TitleService,
    private commonService: CommonService
  ) {}
  ngOnInit() {
    this.getjobId();
    this.getWalkWithPetDetails();
  }
  //method to get job-id
  getjobId() {
    this.jobId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  //method to get walking with pet details
  getWalkWithPetDetails() {
    this.walkersService.getWalkWithPet(this.jobId).subscribe((res: any) => {
      res.data.PetDetails.map((item: any) => {
        this.petDetails = item;
      });
      this.petInfo = res.data.PetInfo;
      this.updatedPetInfo = { ...this.petInfo };
      delete this.updatedPetInfo.pooingTime;
      delete this.updatedPetInfo.pottyTime;
      delete this.updatedPetInfo.Images;
      this.walkerData = res.data.WalkerData;
      this.updatedWalkerData = { ...this.walkerData };
      delete this.updatedWalkerData.Review;
      delete this.updatedWalkerData.Address;
      this.titleService.headerTitle = 'Walkers';
      this.commonService.walkerActive = true;
      this.titleService.toggleTitle=true; 
    });
  }
}
