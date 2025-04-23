import { Routes } from '@angular/router';

export const SAMPLE_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./sample-page.component').then(m => m.SamplePageComponent)
  }
];
