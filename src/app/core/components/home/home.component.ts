import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from '../header/header.component';
import { Menu } from '../../interface/menu.interface';
import {MatListModule} from '@angular/material/list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
  ];

}
