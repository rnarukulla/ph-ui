import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorDashboard }  from './dashboard.component';
//import {EditProfileComponent} from './edit-profile.component';


const customerRoutes: Routes = [
  {path: 'vendor', component: VendorDashboard}
  //{path: 'editProfile',  component: EditProfileComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class VendorRoutingModule{}
