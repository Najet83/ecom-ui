import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  imageUrl = "assets/images/FormaLab_logo.jpg";
  isLoggedIn!: Boolean;


  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {

    this.isLoggedIn = this.userService.isLoggedIn();
  }

  logout()
  {
    localStorage.removeItem("myToken");
    this.router.navigate(['/login']);
  }
}
