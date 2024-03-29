import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-auth-modal',
  styles: [`
    .close {
      margin: -15px -15px 0 0;
      min-width: auto;
    }
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
  `],
  template: `
    <div class="modal-container justify-content-center">
      <div class="w-100 text-right hidden-md-up">
        <button md-button md-dialog-close class="mb-2 close"><i class="fa fa-close"></i></button>
      </div>
      <div>
        <div *ngIf="isLogin">
          <!--<div>
            <button md-raised-button [md-dialog-close]="loginWithFacebook()" class="facebook-button w-100 mb-2">
              <i class="fa fa-facebook mr-2"></i> Log in with Facebook
            </button>
          </div>-->
          <div>
            <button md-raised-button [md-dialog-close]="loginWithGoogle()" class="google-button w-100 mb-2">
              <i class="fa fa-google mr-2"></i> Log in with Google
            </button>
          </div>

          <div class="separator">
            <hr class="hr-separator">
            <span class="span-or">or</span>
          </div>

          <form novalidate [formGroup]="auth">
            <app-email-login [parent]="auth"></app-email-login>
            <div class="my-2">
              <button type="submit" class="submit-button w-100 text-white" [md-dialog-close]="loginWithEmail()" md-raised-button color="accent" [disabled]="auth.invalid">
                Login with email
              </button>
            </div>
            <div class="separator">
              <hr class="hr-separator">
            </div>
            <div class="d-flex justify-content-between align-items-center">
              Don't have an account? <button type="button" class="btn-outline accent" 
                                             (click)="changeToRegisterWithEmail()"> Register</button>
            </div>
          </form>
        </div>

        <div *ngIf="!isLogin && isRegisterWithEmail">
          <form novalidate [formGroup]="auth">
            <div>
              <app-email-signup [parent]="auth"></app-email-signup>
              <button type="submit" class="submit-button w-100 my-2 text-white" 
                      [md-dialog-close]="registerWithEmail()" md-raised-button color="accent">
                Register with email
              </button>
            </div>
          </form>
        </div>
        <div *ngIf="!isLogin && !isRegisterWithEmail">
          <!-- <<div>
            button md-raised-button [md-dialog-close]="registerWithFacebook()" class="facebook-button w-100 mb-2">
              <i class="fa fa-facebook mr-2"></i> Register with Facebook
            </button>
          </div>  -->
          <div >
            <button md-raised-button [md-dialog-close]="registerWithGoogle()" class="google-button w-100 mb-2">
              <i class="fa fa-google mr-2"></i> Register with Google
            </button>
          </div>
          <div>
            <button md-raised-button (click)="changeToRegisterWithEmail()" class="google-button w-100 mb-2">
              <i class="fa fa-envelope mr-2"></i> Register with email
            </button>
          </div>
        </div>
        
        <div class="my-2" *ngIf="!isLogin">
          <div>In pressing the continue button I hereby confirm</div>
          <div>that I have read and accept the terms and conditions,</div>
          <div>and  privacy policy of Preference Pass.</div>
        </div>
        
        <div class="separator" *ngIf="!isLogin">
            <hr class="hr-separator">
          </div>
        <div class="d-flex justify-content-between align-items-center" *ngIf="!isLogin">
          Already have an account? <button class="btn-outline accent" (click)="changeToLogin()"> Login</button>
        </div>
      </div>
    </div>
  `
})
export class AuthModalComponent {
  private EMAIL_REGEXP = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  public auth = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEXP)]]
  });
  public modalType: string;
  public isAuthWithEmail = false;
  public registerType = 'social';

  constructor(private fb: FormBuilder, private dialogRef: MdDialogRef<AuthModalComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) {
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
     data: this.auth.value
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
