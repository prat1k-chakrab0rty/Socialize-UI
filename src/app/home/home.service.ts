import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Module } from './sidebar/sidebar.model';
import { modules } from './sidebar/sidebar.data';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  activeModuleChanged: BehaviorSubject<Module> = new BehaviorSubject<Module>(modules[+localStorage.getItem("moduleId")!]);
  activeUserData: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem("user")!));
  
  private auth: Auth = inject(Auth);

  constructor(private router: Router) { }

  setActiveModule(i: Module) {
    localStorage.setItem("moduleId", i.id.toString());
    this.activeModuleChanged.next(i);
  }
 
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider).then(async (data) => {
      const user:User={ email: data.user.email, id: data.user.uid, fullName: data.user.displayName, photoURL: data.user.photoURL };
      this.activeUserData.next(user);
      localStorage.setItem('user',JSON.stringify(user));
      await this.router.navigate(["/"]);
    });
  }

  async logOut(){
    await signOut(this.auth).then(()=>{
      localStorage.removeItem('user');
      this.activeUserData.next(null);
    });
  }
}
