import { Component } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Location } from '@angular/common';
import { OwnersService } from 'src/app/Admin/owners/owners.service';
import { WalkersService } from 'src/app/Admin/walkers/walkers.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public openNotifications: boolean = false;
  public searchData:any;
  public loggedUser:any;
  constructor(
    public titleService: TitleService,
    private location: Location,
    private ownersService:OwnersService,
    private walkersService:WalkersService,
    public commonService:CommonService
  ) {}
  ngOnInit(){
this.loggedUser = sessionStorage.getItem('loggedUser')
  }
  openNotificationsList() {
    this.openNotifications = !this.openNotifications;
  }
  navigateToList() {
    this.location.back();
  }

 //method to search user 
  getSearchedUser(value:any){
    if(this.titleService.headerTitle=='Owners'){
      if(value.length === 0){
        this.ownersService.getOwners().subscribe((res:any)=>{this.searchData = res?.data?.totalOwners;
          this.commonService.searchData.next(this.searchData)
        })
      }
      else{
        this.ownersService.getSearchOwners(value).subscribe((res:any)=>{this.searchData = res?.data?.totalOwners;
          this.commonService.searchData.next(this.searchData)
        }
        )
      }
    }
    else{

if(value.length===0){
  this.walkersService.getWalkers().subscribe((res:any)=>{this.searchData = res?.data?.totalWalkers;
    this.commonService.searchData.next(this.searchData)
  })
}
else{
  this.walkersService.getSearchedWalkers(value).subscribe((res:any)=>{this.searchData=res?.data?.totalWalkers;
    this.commonService.searchData.next(this.searchData)
  })
}}
    
  }
}
