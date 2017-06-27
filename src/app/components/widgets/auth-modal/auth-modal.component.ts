import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-auth-modal',
  styles: [`
    .facebook-button {
      background: #4568b2;
      color: white;
      display: block;
      width:100%;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 24px;
      padding-right: 24px;
    }

    .google-button {
      background: white;
      color: black;
      width:100%;
      border: black solid 3px;
      display: block;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 24px;
      padding-right: 24px;
    }
    .division {
      margin-top: 10px;
      margin-bottom: 3px;
    }
    
    .email-full-width {
      width: 100%;
    }
  `],
  template: `
    <div>
      <div fxFlex="90%" fxFlexAlign.gt-sm="center">
        <div fxFlex *ngIf="isLogin">
          <div fxFlex>
            <button md-raised-button [md-dialog-close]="loginWithFacebook()" class="facebook-button">
              <i class="socicon-facebook"></i> {{ FacebookLoginText }}
            </button>
          </div>
          <div class="division"></div>
          <div fxFlex>
            <button md-raised-button [md-dialog-close]="loginWithGoogle()" class="google-button">
              <i class="socicon-google"></i> {{ GoogleLoginText }}
            </button>
          </div>
          <form novalidate [formGroup]="auth">
            <div fxFlex>
              <md-input-container class="email-full-width">
                <input mdInput placeholder="Enter your email address" formControlName="email">
              </md-input-container>
            </div>
            <div fxFlex>
              <button  [md-dialog-close]="loginWithEmail()" md-raised-button color="primary" type="submit">
                Login with email
              </button>
            </div>
            <div fxFlex>
              Don't have an account? <button type="button" md-button (click)="changeModalType()"> Register</button>
            </div>
          </form>
        </div>

        <div fxFlex *ngIf="!isLogin">
          <div fxFlex>
              <span>
                Registrate con Facebook o Google
              </span>
          </div>
          <form novalidate [formGroup]="register">
            <app-email-signup [parent]="register"></app-email-signup>
            <button  [md-dialog-close]="registerWithEmail()" md-raised-button color="primary" type="submit">
              Register with email
            </button>
          </form>
          <div fxFlex>
            Already have an account? <button md-button (click)="changeModalType()"> Login</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AuthModalComponent {
  public FacebookLoginText = 'Log in with Facebook';
  public GoogleLoginText = 'Log in with Google';
  public auth = this.fb.group({
    email: ['']
  });
  public modalType: string;
  public isAuthWithEmail = false;
  public register = this.fb.group({
    email: [''],
    password: [''],
    firstName: [''],
    lastName: [''],
    birthDate: ['']
  });

  constructor(private fb: FormBuilder, private dialogRef: MdDialogRef<AuthModalComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
    console.log(this.data);
    this.modalType = this.data.type;
  }
    loginWithEmail() {
      return {
        type: 'EmailLogin',
        data: this.auth.value
      };
    }

  registerWithEmail () {
    return {
     type: 'EmailRegister',
     data: this.register.value
    };
  }

  loginWithFacebook() {
    return {
      type : 'Facebook'
    };
  }

  loginWithGoogle() {
    return {
      type: 'Google'
    };
  }

  changeModalType() {
    if (this.modalType === 'login') {
      this.modalType = 'register';
    } else {
      this.modalType = 'login';
    }
  }

  get isLogin() {
    return this.modalType === 'login';
  }
}
