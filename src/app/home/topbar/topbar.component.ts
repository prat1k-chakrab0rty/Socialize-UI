import { Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../home.service';
import { User } from 'src/app/app.model';
import { Router } from '@angular/router';
import { modules } from '../sidebar/sidebar.data';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  constructor(private homeService:HomeService,private router:Router) {}
  userData!:User;
  ngOnInit(): void {
    this.homeService.activeUserData.subscribe((user:User|null)=>{
      this.userData=user!;
    });
  }

  get userFirstName(){
    return this.userData.fullName?.split(" ")[0];
  }
  goToFeed(){
    this.homeService.setActiveModule(modules[0]);
    this.router.navigate(["/"]);
  }
  logOut(){
    this.homeService.logOut();
  }
}
