import { Component } from '@angular/core';
import { Friend } from '../friends.model';
import { friendsData } from '../friends.data';

@Component({
  selector: 'app-friends-body',
  templateUrl: './friends-body.component.html',
  styleUrls: ['./friends-body.component.css']
})
export class FriendsBodyComponent {
  friends:Friend[]=friendsData;
}
