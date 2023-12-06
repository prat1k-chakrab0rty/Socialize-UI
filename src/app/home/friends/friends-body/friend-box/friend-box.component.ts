import { Component,Input } from '@angular/core';
import { Friend } from '../../friends.model';

@Component({
  selector: 'app-friend-box',
  templateUrl: './friend-box.component.html',
  styleUrls: ['./friend-box.component.css']
})
export class FriendBoxComponent {
  @Input() friendData!:Friend;
}
