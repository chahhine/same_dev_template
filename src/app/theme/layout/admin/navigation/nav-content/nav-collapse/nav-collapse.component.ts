import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../../../navigation/navigation';
import { Location } from '@angular/common';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-nav-collapse',
  standalone: true,
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  imports: [NgClass, NgFor, NgIf, NavItemComponent]
})
export class NavCollapseComponent implements OnInit {
  @Input() item: NavigationItem;
  public isOpen = false;
  public isActive = false;

  constructor(private location: Location) {}

  ngOnInit() {
    // Check if the url matches with any of child items
    const currentUrl = this.location.path();
    if (this.item.children) {
      this.item.children.forEach((item) => {
        if (item.url && currentUrl.includes(item.url)) {
          this.isOpen = true;
          this.isActive = true;
        }
      });
    }
  }

  navCollapse(e) {
    this.isOpen = !this.isOpen;
    e.preventDefault();
  }
}
