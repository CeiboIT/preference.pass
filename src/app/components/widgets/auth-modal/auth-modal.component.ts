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
    .modal-container {
      min-height: 30vh;
    }
  `],
  template: `
    <div class="modal-container justify-content-center">
      <div>
        <div *ngIf="isLogin">
          <div>
            <button md-raised-button [md-dialog-close]="loginWithFacebook()" class="facebook-button">
              <i class="socicon-facebook"></i> Log in with Facebook
            </button>
          </div>
          <div>
            <button md-raised-button [md-dialog-close]="loginWithGoogle()" class="google-button">
              <i class="socicon-google"></i> Log in with Google
            </button>
          </div>
          <form novalidate [formGroup]="auth">
            <div>
              <md-input-container class="email-full-width">
                <input mdInput placeholder="Enter your email address" formControlName="email">
              </md-input-container>
            </div>
            <div>
              <button  [md-dialog-close]="loginWithEmail()" md-raised-button color="primary" type="submit">
                Login with email
              </button>
            </div>
            <div>
              Don't have an account? <button type="button" md-button (click)="changeToRegisterWithEmail()"> Register</button>
            </div>
          </form>
        </div>

        <div *ngIf="!isLogin && isRegisterWithEmail">
          <div class="row">
            <div class="col-12 justify-content-center">
              Register with Facebook or Google
            </div>
          </div>
          <form class="row" novalidate [formGroup]="register">
            <div class="col-12">
              <app-email-signup [parent]="register"></app-email-signup>
              <button  [md-dialog-close]="registerWithEmail()" md-raised-button color="primary" type="submit">
                Register with email
              </button>
            </div>
          </form>
        </div>
        <div class="row" *ngIf="!isLogin && !isRegisterWithEmail">
          <div class="col-12">
            <button md-raised-button [md-dialog-close]="loginWithFacebook()" class="facebook-button">
              <i class="socicon-facebook"></i> Log in with Facebook
            </button>
          </div>
          <div class="col-12">
            <button md-raised-button [md-dialog-close]="loginWithGoogle()" class="google-button">
              <i class="socicon-google"></i> Log in with Google
            </button>
          </div>
          <div class="col-12">
            <button md-raised-button (click)="changeToRegisterWithEmail()" class="google-button">
              <md-icon>email</md-icon> Register with email
            </button>
          </div>
        </div>
        
        <div *ngIf="!isLogin">
          Al hacer clic en Registrarse o en 
          Continuar con, acepto las Condiciones del servicio, 
          la Política de Privacidad de Prefence Pass.
        </div>
        
        <div class="row" *ngIf="!isLogin">
          <div class="col-12">
            Already have an account? <button md-button (click)="changeToLogin()"> Login</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AuthModalComponent {
  public auth = this.fb.group({
    email: ['']
  });
  public modalType: string;
  public isAuthWithEmail = false;
  public registerType = 'social';
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


  changeToRegisterWithEmail() {
    this.modalType = 'register';
    this.registerType = 'withEmail';
  }

  changeToLogin() {
    this.modalType = 'login';
  }
  get isLogin() {
    return this.modalType === 'login';
  }
  get isRegisterWithEmail() {
    return this.registerType === 'withEmail';
  }
}
