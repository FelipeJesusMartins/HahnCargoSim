import { Injectable, isDevMode } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  InDebug: boolean = isDevMode();
  authService: AuthenticationService;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authService = authenticationService;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuthenticated = false;
    const debugOnly = route.data?.['debug'] ?? false;

    if (isAuthenticated) {
      // logged in so return true

      if (!((this.InDebug && debugOnly) || !debugOnly)) {
        // not debug and debug only
        this.router.navigate(['/']);
        return false;
      }

      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/authentication'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
