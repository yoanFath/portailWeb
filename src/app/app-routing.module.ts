import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {GedComponent} from './pages/ged/ged.component';
import {ActuComponent} from './pages/actu/actu.component';


const routes: Routes = [
  { path: 'login',            component: LoginComponent }, // path: '/'
  { path: 'dashboard',    component: DashboardComponent },
  { path: 'ged',    component: GedComponent },
  { path: 'actu',    component: ActuComponent },
  { path: '**',    redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
