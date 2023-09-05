import { Component } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public openNotifications: boolean = false;
  constructor(
    public titleService: TitleService,
    private location: Location
  ) {}
  openNotificationsList() {
    this.openNotifications = !this.openNotifications;
  }
  navigateToList() {
    this.location.back();
  }
}
