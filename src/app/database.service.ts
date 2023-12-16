import { Injectable } from '@angular/core';
import { getDatabase, onValue, push, ref, set } from '@angular/fire/database';
import { User } from './app.model';
import { BehaviorSubject } from 'rxjs';
import { Post } from './home/feed/post.model';
import { getStorage, uploadBytes, ref as sRef } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  suggestion: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  myPosts: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }
  private dbURL: string = 'https://socialize-api-bc7e3-default-rtdb.asia-southeast1.firebasedatabase.app/';
  writeUserData(data: User) {
    const db = getDatabase();
    const { id, ...req } = data;
    set(ref(db, 'users/' + id), req
    );
  }

  readUserData() {
    const db = getDatabase();
    const usersRef = ref(db, 'users/');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }

  getFriendSuggestions(id: string) {
    const db = getDatabase();
    const usersRef = ref(db, 'users/');
    onValue(usersRef, (snapshot) => {
      const { [id]: removedKey, ...suggestions } = snapshot.val();
      // console.log(suggestions);
      const keys = Object.keys(suggestions);
      const res: any[] = [];
      keys.forEach(k => res.push(suggestions[k]));
      this.suggestion.next(res);
    });
  }
  addImageToStorage(name: string, file: File) {
    const storage = getStorage();
    // Create a reference to 'images/mountains.jpg'
    const imageRef = sRef(storage, 'images/' + name);
    uploadBytes(imageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }
  addPost(data: Post) {
    const { uId, ...req } = data;
    return this.http.post(`${this.dbURL}posts/${uId}.json`, req);
  }
  getMyPosts(id: string) {
    const db = getDatabase();
    const myPostsRef = ref(db, 'posts/' + id + '/');
    onValue(myPostsRef, (snapshot) => {
      const data = snapshot.val();
      const keys = Object.keys(data);
      const posts: any[] = [];
      keys.forEach(k => {
        const userRef = ref(db, 'users/' + id);
        onValue(userRef, (snapshot) => {
          const user = snapshot.val();
          posts.push({name:user.fullName,...data[k]})
        });
      }
      );
      this.myPosts.next(posts);
      console.log(posts);
    });
  }

  getAllPosts(){
    const db = getDatabase();
    const postsRef = ref(db, 'posts/');
    onValue(postsRef, (snapshot) => {
      const posts = snapshot.val();
      const keys = Object.keys(posts);
      const postsRes: any[] = [];
      keys.forEach(k => {
        const userRef = ref(db, 'users/' + k);
        onValue(userRef, (snapshot) => {
          const user = snapshot.val();
          const userPosts=posts[k];
          const keys = Object.keys(userPosts);
          keys.forEach((up:any,index:number)=>{
            postsRes.push({name:user.fullName,...userPosts[up]})
          })
        });
      }
      );
      this.myPosts.next(postsRes);
    });
  }
}
