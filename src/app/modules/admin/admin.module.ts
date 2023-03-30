import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbaradminComponent } from '../navbar_admin/navbaradmin/navbaradmin.component';
import { UsersComponent } from './users/users.component';
import { RadarComponent } from './radar/radar.component';
import { PromediosComponent } from './promedios/promedios.component';
import { ToastrModule } from 'ngx-toastr';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ListaRadaresComponent } from './lista-radares/lista-radares.component';
import { RadarEspecificoComponent } from './radar-especifico/radar-especifico.component';
import { FormularioRadarComponent } from './componentes/formulario-radar/formulario-radar.component';




@NgModule({
  declarations: [
    AdminComponent,
    NavbaradminComponent,
    UsersComponent,
    RadarComponent,
    PromediosComponent,
    ListaRadaresComponent,
    RadarEspecificoComponent,
    FormularioRadarComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
        
  ]
})
export class AdminModule { }
