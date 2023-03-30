import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { UsersComponent } from './users/users.component';
import { RadarComponent } from './radar/radar.component';
import { PromediosComponent } from './promedios/promedios.component';
import { ToastrModule } from 'ngx-toastr';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaRadaresComponent } from './lista-radares/lista-radares.component';

import { LigaComponent } from './liga/liga.component';

import { RadarEspecificoComponent } from './radar-especifico/radar-especifico.component';

import { FormularioRadarComponent } from './componentes/formulario-radar/formulario-radar.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminComponent } from './admin/admin.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';
import { EditarComponent } from './componentes/editar/editar.component';





@NgModule({
  declarations: [

    NavbaradminComponent,
    UsersComponent,
    RadarComponent,
    PromediosComponent,
    ListaRadaresComponent,
    LigaComponent,
    RadarEspecificoComponent,
    FormularioRadarComponent,
    HomeAdminComponent,
    AdminComponent,
    ListUsersComponent,
    EliminarComponent,
    EditarComponent,

  ], imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
