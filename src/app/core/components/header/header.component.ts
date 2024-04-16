import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SecurityUltil } from '../../ultil/security.ultil';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  nameUser = SecurityUltil.getUser()?.fullName;

  logout(){
    SecurityUltil.clear();
  }
}
