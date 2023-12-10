import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
/**
 *
 */
constructor(private homeService:HomeService) {}
loginWithGoogle(){
  this.homeService.loginWithGoogle();
}
}
