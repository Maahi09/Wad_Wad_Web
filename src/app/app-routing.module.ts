import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { MasterComponent } from './core/components/master/master.component';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';
import { UserDetailsUserJobDetailsComponent } from './shared/components/user-details-user-job-details/user-details-user-job-details.component';
import { UserJobDetailsComponent } from './Admin/walkers/user-job-details/user-job-details.component';
import { JobDetailsComponent } from './Admin/walkers/job-details/job-details.component';
import { AuthGuard } from './core/services/guard/auth.guard';

const routes: Routes = [
  {
    path:'', component:LoginPageComponent
  },
  {
    path:'', component:MasterComponent,
    // canActivate:[authGuard],
    children:[
      {
        path:'dashboard', loadChildren:()=>import('./Admin/dashboard/dashboard.module').then((m)=>m.DashboardModule),
        canActivate: [AuthGuard],
      },
      {
        path:'owners',loadChildren:()=>import('./Admin/owners/owners.module').then((m)=>m.OwnersModule),
        canActivate: [AuthGuard]
      },
      {
        path:'walkers' , loadChildren:()=>import('./Admin/walkers/walkers.module').then((m)=>m.WalkersModule),
        canActivate: [AuthGuard]
      },
      {
        path:'reports' , loadChildren:()=>import('./Admin/report/report.module').then((m)=>m.ReportModule),
        canActivate: [AuthGuard]
      },
      {
        path:'' ,component:UserDetailsUserJobDetailsComponent,
        children:[
          {
            path:'user-details/:id/:isOwnerCall' , component:UserDetailsComponent
          },
          {
            path:'walkers/user-job-details/:id/:isOwnerCall',component:UserJobDetailsComponent
          }
        ]
      },
      {
        path:'job-details/:id' ,component:JobDetailsComponent
      },
      {
        path:'reports/user-details' , component:UserDetailsComponent
      }
    ]
      },
      
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
