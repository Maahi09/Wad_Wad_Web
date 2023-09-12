import { Component } from '@angular/core';
import { WalkersService } from '../walkers.service';
import { TitleService } from 'src/app/core/services/title.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { walkers, walkersList } from './walkers.model';

@Component({
  selector: 'app-walkers',
  templateUrl: './walkers.component.html',
  styleUrls: ['./walkers.component.css'],
})
export class WalkersComponent {
  public walkersList: walkersList|undefined;
  constructor(
    private walkersService: WalkersService,
    private titleService: TitleService,
    private commonService: CommonService
  ) {}
  ngOnInit() {
    this.getTotalWalkers();
  }
  //method to get total-walkers
  getTotalWalkers() {
    this.walkersService.getWalkers().subscribe((res: walkers) => {
      this.walkersList = res?.data?.totalWalkers;
      this.titleService.headerTitle = 'Walkers';
      this.titleService.titleDashboard = false;
      this.titleService.toggleTitle = false;
      this.titleService.binddata.next(true);
      this.commonService.disableUserJobDetails = false;
    });
  }
}
