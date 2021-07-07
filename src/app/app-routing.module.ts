import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';
import { RegisterComponent } from './components/public/register/register.component';
import { TestComponent } from './components/public/test/test.component';
import { PeopleListComponent } from './components/public/people-list/people-list.component';
import { AddUserComponent } from './components/public/add-user/add-user.component';
import { UpdateUserComponent } from './components/public/update-user/update-user.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: "people-list",
    component: PeopleListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "add-user",
    component: AddUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "update-user/:id",
    component: UpdateUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "**",
    component: Page404Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
