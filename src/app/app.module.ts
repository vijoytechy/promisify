import { SecureInnerPagesGuard } from './shared/secure-inner-pages.guard';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PromiseVerseComponent } from './components/promise-verse/promise-verse.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    PromiseVerseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,


  ],
  providers: [AuthService, AuthGuard, SecureInnerPagesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
