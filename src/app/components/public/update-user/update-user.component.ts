import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private userService: UserService,private toastr: ToastrService) {

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

    this.updateUserForm = this.fb.group(formControls);

  }

  ngOnInit(): void {

    let iduser = this.route.snapshot.params.id;
    console.log(iduser);

    this.userService.getOneUser(iduser).subscribe(
      res => {
        let user = res;
        this.updateUserForm.patchValue({
          firstname: user.firstname,
          lastname: user.lastname,
          phone: user.phone
        })

      }, error => {
        console.log(error);
      }
    )
  }

  get firstname() {
    return this.updateUserForm.get('firstname')
  }

  get lastname() {
    return this.updateUserForm.get('lastname')
  }

  get phone() {
    return this.updateUserForm.get('phone')
  }

  updateUser() {

    let data = this.updateUserForm.value;
    let iduser = this.route.snapshot.params.id;
    let user = new User(data.firstname, data.lastname, '', data.phone, '',iduser);

    this.userService.updateUser(user).subscribe(
      res => {
        this.toastr.warning(res.message);
        this.router.navigate(['/people-list'])
       
      },
      error => {
        console.log(error)
      }
    )}

}
