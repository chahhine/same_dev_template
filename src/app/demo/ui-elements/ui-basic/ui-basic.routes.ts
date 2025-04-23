import { Routes } from '@angular/router';

export const UI_BASIC_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alert',
        loadComponent: () => import('./basic-alert/basic-alert.component').then(m => m.BasicAlertComponent)
      },
      {
        path: 'button',
        loadComponent: () => import('./basic-button/basic-button.component').then(m => m.BasicButtonComponent)
      },
      {
        path: 'badges',
        loadComponent: () => import('./basic-badge/basic-badge.component').then(m => m.BasicBadgeComponent)
      },
      {
        path: 'cards',
        loadComponent: () => import('./basic-cards/basic-cards.component').then(m => m.BasicCardsComponent)
      },
      {
        path: 'progress-bar',
        loadComponent: () => import('./basic-progress-bar/basic-progress-bar.component').then(m => m.BasicProgressBarComponent)
      }
    ]
  }
];
