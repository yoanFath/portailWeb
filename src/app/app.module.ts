import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatProgressBarModule,
  MatSliderModule
} from '@angular/material';
import { LoginComponent } from './pages/login/login.component';
import 'hammerjs';
import { AngularFireModule } from '@angular/fire';
import { NavComponent } from './pages/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { GedComponent } from './pages/ged/ged.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ActuComponent } from './pages/actu/actu.component';
import {UserService} from './services/user.service';
import {environment} from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { ActuListComponent } from './components/actu-list/actu-list.component';
import { ActuCardComponent } from './components/actu-card/actu-card.component';
import { ActuInputComponent } from './components/actu-input/actu-input.component';
import { UserComponent } from './pages/user/user.component';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import { GedCardComponent } from './components/ged-card/ged-card.component';
import { GedListComponent } from './components/ged-list/ged-list.component';
import { GedInputComponent } from './components/ged-input/ged-input.component';
import {CKEditorModule} from 'ckeditor4-angular';
import { ActuDetailComponent } from './components/actu-detail/actu-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    UserCardComponent,
    DashboardComponent,
    GedComponent,
    ActuComponent,
    UserListComponent,
    ActuListComponent,
    ActuCardComponent,
    ActuInputComponent,
    UserComponent,
    GedCardComponent,
    GedListComponent,
    GedInputComponent,
    ActuDetailComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
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
    MatDialogModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule,
    CKEditorModule
  ],
  providers: [UserService, AngularFireAuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    ActuInputComponent,
    GedInputComponent
  ]
})
export class AppModule { }
