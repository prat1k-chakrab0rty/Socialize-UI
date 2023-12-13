import { Component } from '@angular/core';
import { HomeService } from '../../home.service';
import { User } from 'src/app/app.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  constructor(private homeService:HomeService,private route:ActivatedRoute,private dbService:DatabaseService) {}
  userData!:User;
  activeTab:number=0;
  ngOnInit(){
    //get user data
    this.homeService.activeUserData.subscribe((user:User|null)=>{
      this.userData=user!;
    });
    this.dbService.readUserData();
    // this.dbService.getFriendSuggestions(this.userData.id);
  }
}
