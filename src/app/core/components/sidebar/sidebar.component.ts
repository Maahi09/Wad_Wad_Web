import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(
    private router: Router,
    private titleService: TitleService,
    public commonService: CommonService
  ) {}
  openOwnersList() {
    this.commonService.ownerActive = true;
    this.commonService.walkerActive = false;
  }
  openWalkersList() {
    this.commonService.ownerActive = false;
    this.commonService.walkerActive = true;
  }
  openDashboard() {
    this.router.navigate(['dashboard']);
    this.titleService.headerTitle = 'Dashboard';
    this.titleService.toggleTitle = false;
  }
  openReportList() {
    this.router.navigate(['reports']);
    this.titleService.headerTitle = 'Reports';
    this.commonService.ownerActive = false;
    this.commonService.walkerActive = false;
  }
  public logOut() {
    this.router.navigate(['']);
  }
}
