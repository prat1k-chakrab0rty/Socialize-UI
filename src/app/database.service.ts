import { Injectable } from '@angular/core';
import { getDatabase, onValue, ref, set } from '@angular/fire/database';
import { User } from './app.model';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor() { }
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

  getFriendSuggestions(id:string) {
    const db = getDatabase();
    const usersRef = ref(db, 'users/');
    onValue(usersRef, (snapshot) => {
      let data = snapshot.val();
      data.filter((u:any)=>u.id!=id);
      return data;
    });
  }
}
