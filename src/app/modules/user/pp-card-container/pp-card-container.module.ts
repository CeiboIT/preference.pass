import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PpCardContainerComponent } from './pp-card-container.component';
import {PreferencePassCardFormModule} from '../../../components/forms/preference-pass-card-form/preference-pass-card-form.module';
import {PpCardDisplayModule} from '../../../components/widgets/pp-card-display/pp-card-display.module';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PreferencePassCardFormModule,
    PpCardDisplayModule,
    MdButtonModule
  ],
  declarations: [PpCardContainerComponent],
  exports: [PpCardContainerComponent]
})
export class PpCardContainerModule { }
