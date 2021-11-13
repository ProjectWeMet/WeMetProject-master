import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)
  },
  {
     path:'home',
     loadChildren:()=>import('./pages/pages.module').then((m)=>m.PagesModule)},
  {
    path:'user',
    loadChildren:()=>import('./user-dashboard/user-dashboard.module').then((m)=>m.UserDashboardModule)},
 {
  path:'admin',
  loadChildren:()=>import('./admin-dashboard/admin-dashboard.module').then((m)=>m.AdminDashboardModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
