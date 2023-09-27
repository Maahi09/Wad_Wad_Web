import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { OwnersService } from 'src/app/Admin/owners/owners.service';
import { WalkersService } from 'src/app/Admin/walkers/walkers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleService } from 'src/app/core/services/title.service';
import { ownerDetails, userDetails, walkerDetails } from './user-details.model';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  public ownerDogsDetails: boolean = true;
  public walkersDetails: boolean = false;
  public walkersProfile: boolean = false;
  public reportDetails: boolean = false;
  public bindUserDetails: boolean | undefined;
  public ownerDetails: userDetails | undefined;
  public updatedOwnerDetails: any;
  public walkersDetailedData: any;
  public updatedWalkerDetails: any;
  public userId: any;
  public petDetails: any;
  public singlePetDetails: any;
  public updatedPetDetails: any;
  public walkerPromptDetails: any;
  public dogDetails: boolean = false;
  public isOwnerCall: any;
  public petId: number | undefined;
  userDetails: any;
  updatedUserDetails: any;
  constructor(
    private commonService: CommonService,
    private ownersService: OwnersService,
    private walkersService: WalkersService,
    private activatedRoute: ActivatedRoute,
    private titleService: TitleService
  ) {}
  ngOnInit() {
    this.commonService.isActive = true;
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.isOwnerCall =
      (this.activatedRoute.snapshot.paramMap.get('isOwnerCall') == 'true'
        ? true
        : false) || false;
    if (this.userId && this.isOwnerCall) {
      this.getOwnerDetailedData();
    } else {
      this.getWalkerDetailedData();
    }
  }
  //method to open dog details
  openDogDetails(petId: any) {
    // this.petId = petId;
    this.petDetails?.find((item:any)=>{
      if(item.PetId == petId){
        this.singlePetDetails = item
      }
    })
  }
  //method to get owner-details
  getOwnerDetailedData() {
    this.ownersService
      .getOwnerDetails(this.userId)
      .subscribe((res: ownerDetails) => {
        this.userDetails = res.data?.UserDetails;
        this.updatedUserDetails = { ...this.userDetails };
        delete this.updatedUserDetails.Name;
        delete this.updatedUserDetails?.Profile;
        delete this.updatedUserDetails?.userId;
        this.petDetails = res.data?.petsDetails;
        this.bindUserDetails = true;
        this.walkersDetails = false;
        this.walkersProfile = false;
        this.ownerDogsDetails = true;
        this.titleService.toggleTitle = true;
        this.titleService.headerTitle = 'Owners';
        this.titleService.headerListTitle = 'Owner';
        this.commonService.ownerActive = true;
        this.commonService.disableUserJobDetails = true;
      });
  }
  //method to get walker-details
  getWalkerDetailedData() {
    this.walkersService
      .getWalkerDetails(this.userId)
      .subscribe((res: walkerDetails) => {
        this.walkerPromptDetails = res.data?.promptDetails;
        this.userDetails = res.data?.UserDetails;
        this.updatedUserDetails = { ...this.userDetails};
        delete this.updatedUserDetails.Name;
        delete this.updatedUserDetails?.Profile;
        delete this.updatedUserDetails.AboutSelf;
        delete this.updatedUserDetails.IdCardImage;
        delete this.updatedUserDetails.Images;
        delete this.updatedUserDetails.userId;
        this.bindUserDetails = false;
        this.walkersDetails = true;
        this.walkersProfile = true;
        this.ownerDogsDetails = false;
        this.titleService.toggleTitle = true;
        this.commonService.userId.next(this.userId);
        this.commonService.disableUserJobDetails = false;
        this.titleService.headerTitle = 'Walkers';
        this.titleService.headerListTitle = 'Walker';
        this.commonService.walkerActive = true;
      });
  }
}
