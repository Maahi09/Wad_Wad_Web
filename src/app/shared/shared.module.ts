import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalRecordsComponent } from './components/total-records/total-records.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { ListingComponent } from './components/listing/listing.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';
import { UserDetailsUserJobDetailsComponent } from './components/user-details-user-job-details/user-details-user-job-details.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    TotalRecordsComponent,
    MainDashboardComponent,
    ListingComponent,
    UserDetailsComponent,
    PetDetailsComponent,
    UserDetailsUserJobDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    TotalRecordsComponent,
    MainDashboardComponent,
    ListingComponent,
    UserDetailsComponent,
    PetDetailsComponent,
    UserDetailsUserJobDetailsComponent
  ]

})
export class SharedModule { }
