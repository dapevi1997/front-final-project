import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './modules/admin/admin.module';
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
    path:"adm",
   // canActivate: [IsAdminGuard],
    loadChildren: ()=>
      import("./modules/admin/admin.module").then(module=> module.AdminModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
