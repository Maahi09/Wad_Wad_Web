import { Component } from '@angular/core';
import { TitleService } from 'src/app/core/services/title.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private commonService:CommonService,private titleService:TitleService){}
ngOnInit(){
  this.commonService.ownerActive=false
  this.commonService.walkerActive=false
  this.titleService.titleDashboard = true
}
}
