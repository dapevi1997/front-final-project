import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';

import { AdminModule } from './modules/admin/admin.module';
import { OperationsModule } from './modules/operations/operations.module';
import { LearnerModule } from './modules/learner/learner.module';

// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import {AngularFireAuth} from '@angular/fire/compat/auth';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraficaComponent } from './modules/admin/grafica/grafica.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartRadarComponent } from './shared/chart-radar/chart-radar.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ChartRadarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    AdminModule,
    OperationsModule,
    LearnerModule,
    NgxChartsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    NgChartsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
