import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'analytics',
        loadComponent: () =>
          import('./dash-analytics/dash-analytics.component').then(m => m.DashAnalyticsComponent)
      }
    ]
  }
];
