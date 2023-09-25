import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersComponent } from './owners/owners.component';
import { UserDetailsComponent } from 'src/app/shared/components/user-details/user-details.component';


const routes: Routes = [
  {
   path:'', component:OwnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
