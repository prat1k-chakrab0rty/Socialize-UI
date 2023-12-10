import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HomeService } from './home/home.service';
import { User } from './app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private homeService: HomeService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.homeService.activeUserData.subscribe({
      next: (user: User | null) => {
        if (user) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      },
      error: (err: Error)=>{
        console.log(err.message);
        this.router.navigate(['/login']);
        return false;
      }
    });
    return true;
  }
}
