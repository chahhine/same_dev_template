import { Routes } from '@angular/router';

export const CORE_CHART_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex',
        loadComponent: () => import('./apex/apex.component').then(m => m.ApexComponent)
      }
    ]
  }
];
