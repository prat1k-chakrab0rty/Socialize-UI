import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Module } from './sidebar/sidebar.model';
import { modules } from './sidebar/sidebar.data';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  activeModuleChanged:BehaviorSubject<Module>=new BehaviorSubject<Module>(modules[0]);
  setActiveModule(i: Module) {
    this.activeModuleChanged.next(i);
  }
  constructor() {}
}
