import { Routes } from '@angular/router';

export const TBL_BOOTSTRAP_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadComponent: () => import('./basic/basic.component').then(m => m.BasicComponent)
      }
    ]
  }
];
