import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalkersRoutingModule } from './walkers-routing.module';
import { WalkersComponent } from './walkers/walkers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserJobDetailsComponent } from './user-job-details/user-job-details.component';
import { TotalJobsComponent } from './total-jobs/total-jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';


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
    SharedModule
  ]
})
export class WalkersModule { }
