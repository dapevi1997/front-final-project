import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficaComponent } from '../grafica/grafica.component';
import { AdminComponent } from './admin/admin.component';
import { ListaRadaresComponent } from './lista-radares/lista-radares.component';
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
    path:"lista-radares",
    component: ListaRadaresComponent
  },
  {
    path:"users",
    component: UsersComponent
  },
  {
    path:"promedios",
    component: PromediosComponent
  },
  {
    path:"grafica",
    component: GraficaComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
