import { Routes } from '@angular/router';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'horizontal',
        loadComponent: () => import('./horizontal/horizontal.component').then(m => m.HorizontalComponent)
      }
    ]
  }
];
