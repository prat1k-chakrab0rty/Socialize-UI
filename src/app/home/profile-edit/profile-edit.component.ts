import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { User } from 'src/app/app.model';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  userData!: User;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.activeUserData.subscribe((data: User | null) => {
      this.userData = data!;
    });
  }
}
