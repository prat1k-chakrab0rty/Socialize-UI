import { Component,Input } from '@angular/core';
import { Post } from '../../feed.model';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css'],
})
export class PostBodyComponent {
  @Input() postData!:Post;
}
