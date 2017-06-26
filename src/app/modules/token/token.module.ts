import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token.component';
import {routing} from './token.routes';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TokenComponent]
})
export class TokenModule { }
