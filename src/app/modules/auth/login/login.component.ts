import { AuthService } from './../auth.service';
import { Component, inject } from '@angular/core';
import { CustomInputComponent } from '../../../../app-shared-ui/custom-input/custom-input.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SWALMIXIN } from '../../../shared/mixin/mixin-service';
@Component({
  selector: 'app-login',
  imports: [CustomInputComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  providers: [FormBuilder],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(public fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.nonNullable.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  //#region controls
  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  //#endregion

  signIn() {
    if (this.loginForm?.invalid) {
      this.showWarningMessage('Please add details');
      return;
    }
    this.authService
      .login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .subscribe({
        next: (resp) => {console.log("login response: ",resp)},
        error: (err) => {console.log("login error : ",err)},
      });
  }

  showErrorMessage(message: string) {
    SWALMIXIN.fire({
      icon: 'error',
      title: message,
    });
  }
  showWarningMessage(message: string) {
    SWALMIXIN.fire({
      icon: 'warning',
      title: message,
    });
  }
}
