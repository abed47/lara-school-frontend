import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CoursesComponent } from './components/courses/courses.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { GradesComponent } from './components/grades/grades.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResResetComponent } from './components/password/res-reset/res-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    CoursesComponent,
    InstructorsComponent,
    PaymentsComponent,
    GradesComponent,
    CurriculumComponent,
    RequestResetComponent,
    ResResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
