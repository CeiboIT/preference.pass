import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PpCardContainerComponent } from './pp-card-container.component';
import {PreferencePassCardFormModule} from '../../../components/forms/preference-pass-card-form/preference-pass-card-form.module';

@NgModule({
  imports: [
    CommonModule,
    PreferencePassCardFormModule
  ],
  declarations: [PpCardContainerComponent],
  exports: [PpCardContainerComponent]
})
export class PpCardContainerModule { }
