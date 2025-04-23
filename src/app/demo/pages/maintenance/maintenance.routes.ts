import { Routes } from '@angular/router';

export const MAINTENANCE_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'error',
        loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent)
      },
      {
        path: 'coming-soon',
        loadComponent: () => import('./coming-soon/coming-soon.component').then(m => m.ComingSoonComponent)
      }
    ]
  }
];
