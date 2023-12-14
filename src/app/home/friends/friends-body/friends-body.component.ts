import { Component, OnInit } from '@angular/core';
import { Friend } from '../friends.model';
import { DatabaseService } from 'src/app/database.service';
import { HomeService } from '../../home.service';
import { User } from 'src/app/app.model';

@Component({
  selector: 'app-friends-body',
  templateUrl: './friends-body.component.html',
  styleUrls: ['./friends-body.component.css']
})
export class FriendsBodyComponent implements OnInit {
  suggestions:Friend[]=[];
  userData!: User | null;
  constructor(private dbService: DatabaseService, private homeService: HomeService) { }
  ngOnInit() {
    this.homeService.activeUserData.subscribe((data: User | null) => {
      this.userData = data;
      if (this.userData != null) {
        this.dbService.getFriendSuggestions(this.userData?.id!);
      }
    })
    this.dbService.suggestion.subscribe((data) => {
      if(data!=null)
      {
        this.suggestions=data;
      }
    })
  }
}
