import { Component } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard-layout',
  imports: [CustomInputComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
  
  emailControl:FormControl=new FormControl;
}
