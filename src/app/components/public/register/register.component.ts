import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {

    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    }

    this.registerForm = this.fb.group(formControls);

  }

  ngOnInit(): void {

    let isLoggedIn = this.userService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/people-list'])
    }
  }

  get firstname() {
    return this.registerForm.get('firstname')
  }

  get lastname() {
    return this.registerForm.get('lastname')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get repeatPassword() {
    return this.registerForm.get('repeatPassword')
  }

  register() {

    let data = this.registerForm.value;

    let user = new User(data.firstname, data.lastname, data.email, '', data.password);

    this.userService.registerAdmin(user).subscribe(
      res => {
        this.router.navigate(['/login'])
        console.log(res)
      },
      error => {
        console.log(error)
      })

  }

}
