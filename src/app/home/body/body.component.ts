import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Module } from '../sidebar/sidebar.model';
import { modules } from '../sidebar/sidebar.data';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  moduleData!: Module;
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.homeService.activeModuleChanged.subscribe({
      next: (active:Module) => {
        this.moduleData = active;
      },
    });
  }
}
