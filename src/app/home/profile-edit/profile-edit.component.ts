import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { User } from 'src/app/app.model';
import { FormControl, FormGroup } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  userData!: User;
  form!: FormGroup;

  constructor(private homeService: HomeService, private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.homeService.activeUserData.subscribe((data: User | null) => {
      this.userData = data!;
      this.initializeForm();
    });
  }

  initializeForm() {
    this.form = new FormGroup({
      name: new FormControl(this.userData.fullName),
      bio: new FormControl(this.userData.bio),
      from: new FormControl(this.userData.from),
      school: new FormControl(this.userData.school)
    });
  }

  onSubmit() {
    const req: User = { id: this.userData.id, bio: this.form.value.bio, email: this.userData.email, from: this.form.value.from, fullName: this.form.value.name, photoURL: this.userData.photoURL, school: this.form.value.school };
    this.dbService.updateUserById(req).then((data: any) => {
      this.dbService.getUserById(this.userData.id).subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.homeService.activeUserData.next(data);
        this.router.navigate(['/profile', this.userData.id])
      });
    });
  }
}
