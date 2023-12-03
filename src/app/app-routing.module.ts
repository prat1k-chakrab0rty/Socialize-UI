import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './home/feed/feed.component';
import { MessagesComponent } from './home/messages/messages.component';
import { GroupsComponent } from './home/groups/groups.component';
import { FriendsComponent } from './home/friends/friends.component';
import { NotfoundComponent } from './home/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //can put <router-outlet></router-outlet> in the this component's template also
    //  when want to load the children components according to their routes
    //{parentpath}/{childpath} full path for child routes
    children: [
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
      { path: 'feed', component: FeedComponent },
      { path: 'friends', component: FriendsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'not-found', component: NotfoundComponent },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
