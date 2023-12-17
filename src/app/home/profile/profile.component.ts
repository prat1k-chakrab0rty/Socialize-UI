import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { User } from 'src/app/app.model';
import { ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private homeService: HomeService, private route: ActivatedRoute, private dbService: DatabaseService) { }
  uId!: string;
  userData: User|null=null;
  isMe: boolean = true;
  ngOnInit() {
    //getUId
    this.route.params.subscribe((params: Params) => {
      this.uId = params['id'];
    });
    //get user data
    this.dbService.getUserById(this.uId).subscribe((data: User) => {
      this.userData = data;
      this.dbService.getMyPosts(this.userData.id);
      if (this.userData.id == this.homeService.activeUserData.value?.id)
        this.isMe = true;
      else
        this.isMe = false;
    });
  }
}
