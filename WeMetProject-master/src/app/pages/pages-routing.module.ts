import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DepartmentWeMetComponent } from './home/department-we-met/department-we-met.component';
import { HomeComponent } from './home/home.component';
import { ShowCategoreyByIdComponent } from './home/show-categorey-by-id/show-categorey-by-id.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'show',
  component:ShowCategoreyByIdComponent

},
{
  path:'Department',
  component:DepartmentWeMetComponent

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
