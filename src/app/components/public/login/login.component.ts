import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {

    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),

    }

    this.loginForm = this.fb.group(formControls);

  }

  ngOnInit(): void {

    let isLoggedIn = this.userService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/people-list'])
    }

  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }



  login() {

    let data = this.loginForm.value;

    let user = new User('', '', data.email,'', data.password);

    this.userService.loginAdmin(user).subscribe(
      res => {
        console.log(res)
        let token = res.token;
        localStorage.setItem("myToken",token)
        this.router.navigate(['/people-list'])
        
      },
      error => {
        console.log(error)
      }
  
    )}
}



