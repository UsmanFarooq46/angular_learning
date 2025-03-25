import { Component } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { FormControl } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
  
  emailControl:FormControl=new FormControl;
}
