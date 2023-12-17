import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  constructor(private homeService: HomeService, private route: ActivatedRoute, private dbService: DatabaseService) { }
  @Input() userData: User|null=null;
  @Input() isMe!: boolean;
  postsCount: number = 0;
  activeTab: number = 0;
  ngOnInit() {
    //get posts count
    this.dbService.myPosts.subscribe((posts: any) => {
      this.postsCount = posts == null ? 0 : posts.length;
    })
  }
}
