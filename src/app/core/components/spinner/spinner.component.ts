import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ThemePalette } from '@angular/material/core';
import {MatProgressSpinnerModule, ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({

  standalone: true,
  selector: 'app-spinner',
  imports:[
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  ngOnInit() {
  }

}
