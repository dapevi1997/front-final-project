import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { IsAdminGuard } from './guards/is-admin.guard';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/login'
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"admin",
    canActivate: [IsAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
