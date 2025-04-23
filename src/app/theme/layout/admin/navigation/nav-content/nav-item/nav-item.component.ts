import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../../../navigation/navigation';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  imports: [NgClass, NgIf, RouterLink]
})
export class NavItemComponent implements OnInit {
  @Input() item: NavigationItem;
  public isActive = false;

  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    // Check if the url matches with the current url
    const currentUrl = this.location.path();
    if (this.item.url && currentUrl.includes(this.item.url)) {
      this.isActive = true;
    }
  }

  closeOtherMenu(event) {
    // Close other menus if it's not a submenu item
    if (this.item.url && this.router) {
      this.router.navigate([this.item.url]);
    }
  }
}
