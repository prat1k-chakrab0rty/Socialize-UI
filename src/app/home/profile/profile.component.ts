import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { User } from 'src/app/app.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

constructor(private homeService:HomeService) {}
userData!:User;
ngOnInit(){
  this.homeService.activeUserData.subscribe((user:User|null)=>{
    this.userData=user!;
  });
}
}
