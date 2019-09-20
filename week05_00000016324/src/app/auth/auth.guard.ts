import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad  {
  constructor(private authService: AuthService, private router: Router){}
  
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> | boolean{
    if(!this.authService.userisAuthenticated){
      this.router.navigateByUrl('/auth');
    }
    return this.authService.userisAuthenticated;
  }

}
