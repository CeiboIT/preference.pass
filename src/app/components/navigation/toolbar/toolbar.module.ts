import { CommonModule } from '@angular/common';
import { MdButtonModule, MdIconModule, MdToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { ToolbarComponent } from './toolbar.component';
import {UserMenuModule} from '../../widgets/user-menu/user-menu.module';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    UserMenuModule,
    RouterModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
