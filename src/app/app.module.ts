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
import { FriendsHeaderComponent } from './home/friends/friends-header/friends-header.component';
import { FriendsBodyComponent } from './home/friends/friends-body/friends-body.component';
import { FriendBoxComponent } from './home/friends/friends-body/friend-box/friend-box.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { firebaseConfig } from 'src/firebase';

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
    PostImpressionComponent,
    FriendsHeaderComponent,
    FriendsBodyComponent,
    FriendBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //for firebase authentication with help of angular fire package🔥(first 2 lines)
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
