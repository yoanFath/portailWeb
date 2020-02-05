import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {GedComponent} from './pages/ged/ged.component';
import {ActuComponent} from './pages/actu/actu.component';
import {UserComponent} from './pages/user/user.component';
import {AngularFireAuthGuard, canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {AdminGuardGuard} from './guard/admin-guard.guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToDashboard}
  }, // path: '/'
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'ged', component: GedComponent, canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'actu', component: ActuComponent, canActivate: [AngularFireAuthGuard, AdminGuardGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'user', component: UserComponent, canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
