import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnersService } from 'src/app/Admin/owners/owners.service';
import { WalkersService } from 'src/app/Admin/walkers/walkers.service';
import { TitleService } from 'src/app/core/services/title.service';
import { CommonService } from '../../services/common.service';
import { totalOwners, totalWalkers } from './listing.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
  @Input() displayDataFromParent: any;
  @Input() isOwnerCall: boolean = false;
  public displayList: any = [];
  public noDataFound:boolean = false
  constructor(
    private router: Router,
    public titleService: TitleService,
    private commonService:CommonService
  ) {}
  ngOnChanges(changes: any) {
    if (changes && changes.displayDataFromParent) {
      const newValue = changes.displayDataFromParent.currentValue;
      // Check if newValue is an array and has elements
      if (Array.isArray(newValue) && newValue.length > 0) {
        this.displayList = newValue;
      }
    }
  }
  ngOnInit(){
    this.getSearchedData()
  }
  //method to open user-details page
  openUserDetails(userId: any) {
    this.router.navigate(['user-details', userId, this.isOwnerCall]);
  }

  //method to bind SearchedData
  getSearchedData(){
    this.commonService.searchData.subscribe((res:any)=>{this.displayList=res;
      if(res.length===0){
this.noDataFound = true
      }
      else{
        this.noDataFound = false
      }
    });
  }
}
