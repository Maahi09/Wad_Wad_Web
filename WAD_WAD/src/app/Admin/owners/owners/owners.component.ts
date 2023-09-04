import { Component, Input } from '@angular/core';
import { OwnersService } from '../owners.service';
import { TitleService } from 'src/app/core/services/title.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css'],
})
export class OwnersComponent {
  public ownerList: any = [];
  ownerCall: boolean = true;
  constructor(
    private ownersService: OwnersService,
    private titleService: TitleService,
    private commonService: CommonService
  ) {}
  ngOnInit() {
    this.getTotalOwners();
  }
  //method for getting total Owners
  getTotalOwners() {
    this.ownersService.getOwners().subscribe((res: any) => {
      this.ownerList = res.data.totalOwners;
      this.titleService.headerTitle = 'Owners';
      this.titleService.titleDashboard = false;
      this.titleService.binddata.next(false);
      this.commonService.disableUserJobDetails = true;
      this.titleService.toggleTitle = false;
      this.ownerCall = true;
    });
  }
}
