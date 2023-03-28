import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';

import { AdminModule } from './modules/admin/admin.module';
import { OperationsModule } from './modules/operations/operations.module';
import { LearnerModule } from './modules/learner/learner.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    AdminModule,
    OperationsModule,
    LearnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
