import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

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
        <div fxFlex>
          <button md-raised-button class="facebook-button">
            <i class="socicon-facebook"></i> {{ FacebookLoginText }}
          </button>
        </div>
        <div class="division"></div>
        <div fxFlex>
          <button md-raised-button class="google-button">
            <i class="socicon-google"></i> {{ GoogleLoginText }}
          </button>
        </div>
        <div fxFlex>
          <form novalidate [formGroup]="auth">
            <div fxFlex>
              <md-input-container class="email-full-width">
                <input mdInput placeholder="Enter your email address" formControlName="email">
              </md-input-container>
            </div>
            <div fxFlex>
              <button  md-raised-button color="primary" type="submit">
                Register with email
              </button>
            </div>
          </form>
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
  constructor(private fb: FormBuilder) {}

}
