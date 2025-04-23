import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../../../navigation/navigation';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { NavCollapseComponent } from '../nav-collapse/nav-collapse.component';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-nav-group',
  standalone: true,
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss'],
  imports: [NgClass, NgIf, NgFor, NavCollapseComponent, NavItemComponent]
})
export class NavGroupComponent implements OnInit {
  @Input() item: NavigationItem;

  constructor() {}

  ngOnInit() {}
}
