import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatGridListModule, MatInputModule, MatSliderModule} from '@angular/material';
import { LoginComponent } from './pages/login/login.component';
import 'hammerjs';
import { NavComponent } from './pages/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {ReactiveFormsModule} from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { GedComponent } from './pages/ged/ged.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ActuComponent } from './pages/actu/actu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    UserCardComponent,
    DashboardComponent,
    GedComponent,
    ActuComponent
    UserListComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
