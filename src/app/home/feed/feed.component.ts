import { Component, ElementRef, OnInit } from '@angular/core';
import { Post } from './feed.model';
import { feedData } from './feed.data';
import { DatabaseService } from 'src/app/database.service';
import { HomeService } from '../home.service';
import { User } from 'src/app/app.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[] = feedData;
  userData!: User;
  constructor(private dbService: DatabaseService, private homeService: HomeService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    //get user data
    this.homeService.activeUserData.subscribe((data: User | null) => {
      this.userData = data!;
    })
  
    this.route.data.subscribe((value: any) => {
      //my posts(profile)
      console.log(value['for']);
      if (value['for'] == 'my') {
        this.dbService.getMyPosts(this.userData.id);
      }
      //all posts(feed)
      else {
        this.dbService.getAllPosts();
      }
    })
    //get posts
    this.dbService.myPosts.subscribe((posts: any) => {
      this.posts = posts!;
    });
  }
  clickFileBtn(el: HTMLElement) {
    el.click();
  }
  onFileSelected($event: any) {
    const inputElement = event?.target as HTMLInputElement;
    if (inputElement.files) {
      const file: File = inputElement.files[0];
      if (file) {
        console.log(file);
        this.dbService.addImageToStorage(file.name, file);
        this.dbService.addPost({ uId: this.userData.id, dateTime: new Date(), url: `https://firebasestorage.googleapis.com/v0/b/socialize-api-bc7e3.appspot.com/o/images%2F${file.name.replaceAll(' ', '%20')}?alt=media` }).subscribe({
          next: (data: any) => {
            console.log("Post added successfully!");
          },
          error: (error: any) => {
            console.log("Error while adding post");
          }
        });
      }
    }
  }
}
