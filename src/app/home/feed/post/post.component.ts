import { Component,Input } from '@angular/core';
import { Post } from '../feed.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
@Input('postData') post!:Post;
}
