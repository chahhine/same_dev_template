import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./theme/layout/admin/admin.component').then(m => m.AdminComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard/analytics',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.routes').then(routes => routes.LAYOUT_ROUTES)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.routes').then(routes => routes.UI_BASIC_ROUTES)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.routes').then(routes => routes.FORM_ELEMENTS_ROUTES)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.routes').then(routes => routes.TBL_BOOTSTRAP_ROUTES)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.routes').then(routes => routes.CORE_CHART_ROUTES)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.routes').then(routes => routes.SAMPLE_PAGE_ROUTES)
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('./theme/layout/auth/auth.component').then(m => m.AuthComponent),
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.routes').then(routes => routes.AUTHENTICATION_ROUTES)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.routes').then(routes => routes.MAINTENANCE_ROUTES)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard/analytics'
  }
];
