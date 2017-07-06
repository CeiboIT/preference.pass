import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-auth-modal',
  styles: [`
    .facebook-button, .google-button, .submit-button {
      padding: 8px 20px;
    }

    .facebook-button {
      background: #4568b2;
      color: white;
    }

    .google-button {
      background: white;
      color: #212121;
      border: #212121 solid 2px;
    }

    .submit-button {
      color: white;
    }
    
    .separator {
      position: relative;
      font-size: 18px;
      color: #aaa;
      margin: 0;
      padding: 20px 0;
    }

    .hr-separator {
      margin-top: 0!important;
      margin-bottom: 0!important;
      border-top: 1px solid #d2d8d8;
    }

    .span-or {
      display: block;
      position: absolute;
      left: 50%;
      top: 5px;
      margin-left: -25px;
      background-color: #fff;
      width: 50px;
      text-align: center;
    }

    .modal-container {
      min-height: 30vh;
    }
  `],
  template: `
    <div class="modal-container justify-content-center">
      <div class="w-100" style="overflow:hidden;">
        <button md-button md-dialog-close class="pull-right mb-2" style="min-width: auto;"><i class="fa fa-close"></i></button>
      </div>
      <div>
        <div *ngIf="isLogin">
          <div>
            <button md-raised-button [md-dialog-close]="loginWithFacebook()" class="facebook-button w-100 mb-2">
              <i class="socicon-facebook mr-2"></i> Log in with Facebook
            </button>
          </div>
          <div>
            <button md-raised-button [md-dialog-close]="loginWithGoogle()" class="google-button w-100 mb-2">
              <i class="socicon-google mr-2"></i> Log in with Google
            </button>
          </div>

          <div class="separator">
            <hr class="hr-separator">
            <span class="span-or">or</span>
          </div>

          <form novalidate [formGroup]="auth">
            <app-email-login [parent]="auth"></app-email-login>
            <div>
              <button [md-dialog-close]="loginWithEmail()" md-raised-button color="accent" type="submit" class="submit-button w-100">
                Login with email
              </button>
            </div>
            <div class="separator">
              <hr class="hr-separator">
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
              <button  [md-dialog-close]="registerWithEmail()" md-raised-button color="accent" class="submit-button w-100 mb-2" type="submit">
                Register with email
              </button>
            </div>
          </form>
        </div>
        <div class="row" *ngIf="!isLogin && !isRegisterWithEmail">
          <div class="col-12">
            <button md-raised-button [md-dialog-close]="registerWithFacebook()" class="facebook-button w-100 mb-2">
              <i class="socicon-facebook"></i> Register with Facebook
            </button>
          </div>
          <div class="col-12">
            <button md-raised-button [md-dialog-close]="registerWithGoogle()" class="google-button w-100 mb-2">
              <i class="socicon-google"></i> Register with Google
            </button>
          </div>
          <div class="col-12">
            <button md-raised-button (click)="changeToRegisterWithEmail()" class="google-button w-100 mb-2">
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
    email: [''],
    password: ['']
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
      type : 'FacebookLogin'
    };
  }

  loginWithGoogle() {
    return {
      type: 'GoogleLogin'
    };
  }

  registerWithFacebook() {
    return {
      type: 'FacebookRegister'
    };
  }

  registerWithGoogle() {
    return {
      type: 'GoogleRegister'
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
