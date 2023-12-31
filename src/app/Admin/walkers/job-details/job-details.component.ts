import { Component } from "@angular/core";
import { WalkersService } from "../walkers.service";
import { ActivatedRoute } from "@angular/router";
import { TitleService } from "src/app/core/services/title.service";
import { CommonService } from "src/app/shared/services/common.service";
import { petInfo } from "./job-details.model";

@Component({
  selector: "app-job-details",
  templateUrl: "./job-details.component.html",
  styleUrls: ["./job-details.component.css"],
})
export class JobDetailsComponent {
  public jobId: any;
  public petDetails: any;
  public petInfo: petInfo | undefined;
  public walkerData: any;
  public updatedPetInfo: any;
  public updatedWalkerData: any;
  public ownerReview: any;
  public walkerReview: any;
  public lat: number = 0;
  public long: number = 0;
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
    this.jobId = this.activatedRoute.snapshot.paramMap.get("id");
  }
  //method to get walking with pet details
  getWalkWithPetDetails() {
    this.walkersService.getWalkWithPet(this.jobId).subscribe((res: any) => {
      res?.data?.PetDetails.map((item: any) => {
        this.petDetails = item;
      });
      this.petInfo = res?.data?.PetInfo;
      this.updatedPetInfo = { ...this.petInfo };
      delete this.updatedPetInfo.pooingTime;
      delete this.updatedPetInfo.pottyTime;
      delete this.updatedPetInfo.Images;
      this.walkerData = res?.data?.WalkerData;
      this.updatedWalkerData = { ...this.walkerData };
      delete this.updatedWalkerData.Lat;
      delete this.updatedWalkerData.Long;
      delete this.updatedWalkerData.Address;
      this.ownerReview = res?.data?.OwnerReview;
      this.walkerReview = res?.data?.WalkerReview;
      this.titleService.headerTitle = "Walkers";
      this.titleService.headerListTitle = "Walker";
      this.commonService.walkerActive = true;
      this.titleService.toggleTitle = true;
      this.lat = res?.data?.WalkerData.Lat;
      this.long = res?.data?.WalkerData.Long;
    });
  }
  //for google-map
  center: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.long,
  };
}
