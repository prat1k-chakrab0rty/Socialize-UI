import { Component,OnInit } from '@angular/core';
import { Post } from './feed.model';
import { feedData } from './feed.data';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
  posts:Post[]=feedData;
constructor(){}
ngOnInit(): void {
  this.posts=this.shuffleArray(this.posts);
}
shuffleArray(array:Post[]):Post[] {
  for (var i = array.length - 1; i > 0; i--) { 
 
      // Generate random number 
      var j = Math.floor(Math.random() * (i + 1));
                 
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }   
  return array;
}
}
