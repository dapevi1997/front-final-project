import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './modules/admin/admin.module';
import { LoginComponent } from './modules/login/login/login.component';
import { IsAdminGuard } from './guards/is-admin.guard';
import { IsOperationsGuard } from './guards/is-operations.guard';
import { IsLeanerGuard } from './guards/is-leaner.guard';
import { AdminComponent } from './modules/admin/admin/admin.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: "login",
    component: LoginComponent
  },

  {

    path: "adm",
    component: AdminComponent,
    canActivate: [IsAdminGuard],
    loadChildren: () =>
      import("./modules/admin/admin.module").then(module => module.AdminModule)
  },
  {
    path: "operations",
    canActivate: [IsOperationsGuard],
    loadChildren: () => import("./modules/operations/operations.module").then(module => module.OperationsModule)
  },
  {
    path: "learner",
    canActivate: [IsLeanerGuard],
    loadChildren: () => import("./modules/learner/learner.module").then(module => module.LearnerModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
