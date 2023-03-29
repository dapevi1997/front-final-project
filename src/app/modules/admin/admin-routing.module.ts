import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PromediosComponent } from './promedios/promedios.component';
import { RadarComponent } from './radar/radar.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path:"",
    component: AdminComponent
  },
  {
    path:"radar",
    component: RadarComponent
  },
  {
    path:"users",
    component: UsersComponent
  },
  {
    path:"promedios",
    component: PromediosComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
