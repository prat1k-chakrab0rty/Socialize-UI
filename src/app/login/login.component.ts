import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /**
   *
   */
  constructor(private homeService: HomeService, private dbService: DatabaseService) { }
  loginWithGoogle() {
    this.homeService.loginWithGoogle();
    this.dbService.getFriendSuggestions(this.homeService.activeUserData.value?.id!);
  }
}
