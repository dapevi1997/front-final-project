import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbaradminComponent } from '../navbar_admin/navbaradmin/navbaradmin.component';




@NgModule({
  declarations: [
    AdminComponent,
    NavbaradminComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
   
  ]
})
export class AdminModule { }
