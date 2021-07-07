import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/public/login/login.component';
import { HomeComponent } from './components/public/home/home.component';
import { RegisterComponent } from './components/public/register/register.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { TestComponent } from './components/public/test/test.component';
import { Page404Component } from './components/public/page404/page404.component';

import { HttpClientModule } from '@angular/common/http';
import { PeopleListComponent } from './components/public/people-list/people-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/public/add-user/add-user.component';
import { UpdateUserComponent } from './components/public/update-user/update-user.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent,
    Page404Component,
    PeopleListComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
