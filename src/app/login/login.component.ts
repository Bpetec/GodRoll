import { Component, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorageService';

export interface IUser {
  id?: number;
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent {
//   title = 'Login';
// }
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class LoginComponent implements OnInit {
  user: IUser = {username: '', password: ''};
  // sets username and password to empty
  localStorageService: LocalStorageService<IUser>;
  currentUser: IUser = null;
  constructor(private router: Router) {
    this.localStorageService = new LocalStorageService('user');
   }

   ngOnInit() {
    this.currentUser = this.localStorageService.getItemsFromLocalStorage();
    console.log('this.currentUser is ', this.currentUser);
    if (this.currentUser != null) {
      this.router.navigate(['home']);
    }
  }
  login(user: IUser) {
    console.log('from login user: ', user);
    const defaultUser: IUser = {username: 'a', password: 'b' };
    if (user.username != null && user.password != null) {
      if (user.username === defaultUser.username && user.password === defaultUser.password) {
          // log user in, store in local storage, navigate to contacts page
          this.localStorageService.saveItemsToLocalStorage(user);
          this.router.navigate(['home']);
          // ^ navigates to the contacts page, specified in routes.
      } else { if (user.username === '' && user.password === '') {

      }
      }} else {

      }
    }

  }
  
