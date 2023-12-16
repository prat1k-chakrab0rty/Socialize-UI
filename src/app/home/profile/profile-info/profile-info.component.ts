import { Component } from '@angular/core';
import { HomeService } from '../../home.service';
import { User } from 'src/app/app.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';
import { Post } from '../../feed/post.model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  constructor(private homeService:HomeService,private route:ActivatedRoute,private dbService:DatabaseService) {}
  userData!:User;
  postsCount:number=0;
  activeTab:number=0;
  ngOnInit(){
    //get user data
    this.homeService.activeUserData.subscribe((user:User|null)=>{
      this.userData=user!;
    });
    //get posts count
    this.dbService.myPosts.subscribe((posts:any)=>{
      this.postsCount=posts==null?0:posts.length;
    })
    this.dbService.readUserData();
    this.dbService.getFriendSuggestions(this.userData.id);
    this.dbService.getAllPosts();
  }
}
