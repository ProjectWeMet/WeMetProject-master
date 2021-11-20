import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheraizationGuard } from './autheraization.guard';

const routes: Routes = [
  {
    path:'login',
    loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)
  },
  {
     path:'',
     loadChildren:()=>import('./pages/pages.module').then((m)=>m.PagesModule)},
  {
    path:'user',
    loadChildren:()=>import('./user-dashboard/user-dashboard.module').then((m)=>m.UserDashboardModule),
    canActivate:[AutheraizationGuard]

  },
 {
  path:'admin',
  loadChildren:()=>import('./admin-dashboard/admin-dashboard.module').then((m)=>m.AdminDashboardModule),
  canActivate:[AutheraizationGuard]

}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
