import { Routes } from '@angular/router';

export const FORM_ELEMENTS_ROUTES: Routes = [
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
