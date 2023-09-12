import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalkersRoutingModule } from './walkers-routing.module';
import { WalkersComponent } from './walkers/walkers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserJobDetailsComponent } from './user-job-details/user-job-details.component';
import { TotalJobsComponent } from './total-jobs/total-jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    WalkersComponent,
    UserJobDetailsComponent,
    TotalJobsComponent,
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    WalkersRoutingModule,
    SharedModule,
    NgbModule,
    GoogleMapsModule
  ]
})
export class WalkersModule { }
