import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingninComponent } from './singnin/singnin.component';
import { SingnupComponent } from './singnup/singnup.component';
import { PreselectionComponent } from './preselection/preselection.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardPartenaireComponent } from './dashboard-partenaire/dashboard-partenaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environement } from '../environements/environement';
import { SelectionComponent } from './selection/selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { VideosComponent } from './videos/videos.component';
import { EditPreselectComponent } from './edit-preselect/edit-preselect.component';
import { EditSelectComponent } from './edit-select/edit-select.component';
import { PictuerPickerComponent } from './pictuer-picker/pictuer-picker.component';
import { GoogleChartComponent, Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CreateDetteComponent } from './create-dette/create-dette.component';

import { EditDetteComponent } from './edit-dette/edit-dette.component';

import { CreateRemboursementComponent } from './create-remboursement/create-remboursement.component';
import { EditRemboursementComponent } from './edit-remboursement/edit-remboursement.component';

@NgModule({
  declarations: [
    AppComponent,
    SingninComponent,
    SingnupComponent,
    PreselectionComponent,
    DashboardUserComponent,
    DashboardAdminComponent,
    DashboardPartenaireComponent,
    SelectionComponent,
    VideosComponent,
    EditPreselectComponent,
    EditSelectComponent,
    PictuerPickerComponent,
    CreateDetteComponent,
    EditDetteComponent,
    CreateRemboursementComponent,
    EditRemboursementComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(environement.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    BrowserAnimationsModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
