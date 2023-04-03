import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarLeaguesComponent } from './radar-leagues/radar-leagues.component';
import { OperationsRoutingModule } from './operations-routing.module';
import { ChartModule } from '../chart/chart.module';
import { PromediosoperationsComponent } from './promediosoperations/promediosoperations.component';
import { NavbaroperationsComponent } from './navbaroperations/navbaroperations.component';
import { GraficaOperationsComponent } from './grafica-operations/grafica-operations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RadarLeaguesComponent,
    PromediosoperationsComponent,
    NavbaroperationsComponent,
    GraficaOperationsComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    ChartModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,

  ]
})
export class OperationsModule { }
