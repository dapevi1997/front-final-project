import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbaradminComponent } from '../navbar_admin/navbaradmin/navbaradmin.component';
import { UsersComponent } from './users/users.component';
import { RadarComponent } from './radar/radar.component';
import { PromediosComponent } from './promedios/promedios.component';




@NgModule({
  declarations: [
    AdminComponent,
    NavbaradminComponent,
    UsersComponent,
    RadarComponent,
    PromediosComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
   
  ]
})
export class AdminModule { }
