import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(private userService: UserService,private toastr: ToastrService, private fb: FormBuilder, private router: Router) {

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
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
    }

    this.addUserForm = this.fb.group(formControls);

  }

  ngOnInit(): void {
  }

  get firstname() {
    return this.addUserForm.get('firstname')
  }

  get lastname() {
    return this.addUserForm.get('lastname')
  }

  get phone() {
    return this.addUserForm.get('phone')
  }

  addUser() {

    let data = this.addUserForm.value;

    let user = new User(data.firstname, data.lastname, '', data.phone, '');

    this.userService.addUser(user).subscribe(
      res => {
       

        this.toastr.success(res.message);
        this.router.navigate(['/people-list'])
        
       
      },
      error => {
        console.log(error)
      }



    )

  }

}
