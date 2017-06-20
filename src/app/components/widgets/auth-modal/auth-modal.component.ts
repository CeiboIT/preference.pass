import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-auth-modal',
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
      </div>
      </div>
  `,
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
  `]
})
export class AuthModalComponent {
  public FacebookLoginText = 'Log in with Facebook';
  public GoogleLoginText = 'Log in with Google';
  constructor() { }
}
