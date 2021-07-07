import { Component, OnInit } from '@angular/core';
//import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  /*
    name = "Najet";
    imageUrl = "assets/images/FormaLab_logo.jpg";
  
    bookList = ['book1', 'book2'];
    myCondition = true;
    usersList:any[] = [];*/

  //constructor(private userService: UserService) { }
  /*
    name = "Najet";
    imageUrl = "assets/images/FormaLab_logo.jpg";
  
    bookList = ['book1', 'book2'];
    myCondition = true;
    usersList:any[] = [];*/
  //constructor(private userService: UserService) { }

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    let formControls = {
      firstName: new FormControl()
    }
    this.myForm = this.fb.group(formControls);
  }


  ngOnInit(): void {

  }

  saveUser() {

    console.log(this.myForm.value);
  }
  /*
    ngOnInit(): void {
      this.userService.getAllUsers().subscribe(
        result => {
          this.usersList = result;
        },
        error => {
          console.log(error);
        })
    }
  
    hello(myName: string) {
      alert("hello " + myName);
  
    }*/



}