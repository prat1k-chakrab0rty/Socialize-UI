import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { FeedComponent } from './home/feed/feed.component';
import { MessagesComponent } from './home/messages/messages.component';
import { FriendsComponent } from './home/friends/friends.component';
import { GroupsComponent } from './home/groups/groups.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { NotfoundComponent } from './home/notfound/notfound.component';
import { PostComponent } from './home/feed/post/post.component';
import { PostBodyComponent } from './home/feed/post/post-body/post-body.component';
import { PostImpressionComponent } from './home/feed/post/post-impression/post-impression.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    FeedComponent,
    MessagesComponent,
    FriendsComponent,
    GroupsComponent,
    TopbarComponent,
    NotfoundComponent,
    PostComponent,
    PostBodyComponent,
    PostImpressionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
