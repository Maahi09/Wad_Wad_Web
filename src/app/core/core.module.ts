import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MasterComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgbPopoverModule
  ]
})
export class CoreModule { }
