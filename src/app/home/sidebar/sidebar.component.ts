import { Component, OnInit } from '@angular/core';
import { Module } from './sidebar.model';
import { modules } from './sidebar.data';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit{
  modules: Module[] = modules;
  activeModule!:Module;
  constructor(private homeService: HomeService,private router:Router)  {}
  ngOnInit(): void {
    this.homeService.activeModuleChanged.subscribe({
      next:(active:Module)=>{
        this.activeModule=active;
      }
    })
  }
  setActiveModule(i: Module):void {
    this.homeService.setActiveModule(i);
    this.router.navigate([`/${i.path}`]);
  }
}
