import { Component } from '@angular/core';
import { CustomInputComponent } from '../../custom-input/custom-input.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CustomInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  emailControl:FormControl=new FormControl;

}
