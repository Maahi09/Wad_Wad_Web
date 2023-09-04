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
    console.log(this.petId);
    this.petDetails?.find((item:any)=>{
      if(item.PetId == petId){
        console.log(item);
        this.singlePetDetails = item
      }
    })
  }
  //method to get owner-details
  getOwnerDetailedData() {
    this.ownersService
      .getOwnerDetails(this.userId)
      .subscribe((res: ownerDetails) => {
        this.ownerDetails = res.data?.UserDetails;
        this.updatedOwnerDetails = { ...this.ownerDetails };
        delete this.updatedOwnerDetails.Name;
        delete this.updatedOwnerDetails?.Profile;
        this.petDetails = res.data?.petsDetails;
        // res.data?.petsDetails.forEach((item:any)=>this.petId = item.PetId);
        this.commonService.petDetails.next(this.petDetails);
        this.bindUserDetails = true;
        this.walkersDetails = false;
        this.walkersProfile = false;
        this.ownerDogsDetails = true;
        this.titleService.toggleTitle = true;
        this.titleService.headerTitle = 'Owners';
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
        this.walkersDetailedData = res.data?.UserDetails;
        this.updatedWalkerDetails = { ...this.walkersDetailedData };
        delete this.updatedWalkerDetails.Name;
        delete this.updatedWalkerDetails?.Profile;
        delete this.updatedWalkerDetails.AboutSelf;
        delete this.updatedWalkerDetails.IdCardImage;
        delete this.updatedWalkerDetails.Images;
        this.bindUserDetails = false;
        this.walkersDetails = true;
        this.walkersProfile = true;
        this.ownerDogsDetails = false;
        this.titleService.toggleTitle = true;
        this.commonService.userId.next(this.userId);
        this.commonService.disableUserJobDetails = false;
        this.titleService.headerTitle = 'Walkers';
        this.commonService.walkerActive = true;
      });
  }
  //method for binding walker and owner details based on condition
  get userDetails() {
    if (this.bindUserDetails == true) {
      return this.ownerDetails;
    } else {
      return this.walkersDetailedData;
    }
  }
  //method for binding walker and owner details based on condition
  get updatedUserDetails() {
    if (this.bindUserDetails == true) {
      return this.updatedOwnerDetails;
    } else {
      return this.updatedWalkerDetails;
    }
  }
}
