import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'NAVIGATION',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'feather icon-home',
        url: '/dashboard/analytics',
        classes: 'nav-item'
      },
      {
        id: 'layouts',
        title: 'Horizontal Layouts',
        type: 'item',
        icon: 'feather icon-layout',
        url: '/layout/horizontal',
        classes: 'nav-item'
      }
    ]
  },
  {
    id: 'ui-element',
    title: 'UI ELEMENT & FORMS',
    type: 'group',
    icon: 'icon-ui-elements',
    children: [
      {
        id: 'basic',
        title: 'Basic',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'alert',
            title: 'Alert',
            type: 'item',
            url: '/basic/alert'
          },
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/basic/badges'
          },
          {
            id: 'cards',
            title: 'Cards',
            type: 'item',
            url: '/basic/cards'
          },
          {
            id: 'progress-bar',
            title: 'Progress Bar',
            type: 'item',
            url: '/basic/progress-bar'
          }
        ]
      },
      {
        id: 'forms',
        title: 'Forms',
        type: 'item',
        url: '/forms/basic',
        icon: 'feather icon-file-text',
        classes: 'nav-item'
      }
    ]
  },
  {
    id: 'table',
    title: 'TABLE & CHARTS',
    type: 'group',
    icon: 'icon-tables',
    children: [
      {
        id: 'bootstrap',
        title: 'Bootstrap Table',
        type: 'item',
        icon: 'feather icon-server',
        url: '/tbl-bootstrap/basic'
      },
      {
        id: 'apex',
        title: 'Apex Chart',
        type: 'item',
        icon: 'feather icon-pie-chart',
        url: '/charts/apex'
      }
    ]
  },
  {
    id: 'pages',
    title: 'PAGES',
    type: 'group',
    icon: 'icon-pages',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'reset-password',
            title: 'Reset Password',
            type: 'item',
            url: '/auth/reset-password',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'change-password',
            title: 'Change Password',
            type: 'item',
            url: '/auth/change-password',
            target: true,
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        type: 'collapse',
        icon: 'feather icon-settings',
        children: [
          {
            id: 'error',
            title: 'Error',
            type: 'item',
            url: '/maintenance/error',
            target: true
          },
          {
            id: 'coming-soon',
            title: 'Coming Soon',
            type: 'item',
            url: '/maintenance/coming-soon',
            target: true
          }
        ]
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        icon: 'feather icon-sidebar',
        url: '/sample-page',
        classes: 'nav-item'
      }
    ]
  }
];

@Injectable()
export class NavigationService {
  get() {
    return NavigationItems;
  }
}
