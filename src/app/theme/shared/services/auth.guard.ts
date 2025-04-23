import { Injectable } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

// Angular 19 uses functional route guards
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn) {
    return true;
  }

  // Store the attempted URL for redirecting after login
  const redirectUrl = state.url || '/dashboard/analytics';

  // Navigate to the login page with a redirect parameter
  return router.createUrlTree(['/auth/signin'], { queryParams: { returnUrl: redirectUrl } });
};

// For role-based authorization
export const hasRoleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);
    const currentUser = authService.currentUserValue;

    if (authService.isLoggedIn && currentUser && allowedRoles.includes(currentUser.role)) {
      return true;
    }

    // If logged in but doesn't have the right role
    if (authService.isLoggedIn) {
      return router.createUrlTree(['/unauthorized']);
    }

    // If not logged in at all
    return router.createUrlTree(['/auth/signin'], { queryParams: { returnUrl: state.url } });
  };
};
