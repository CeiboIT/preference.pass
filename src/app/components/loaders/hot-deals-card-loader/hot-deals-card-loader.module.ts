import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotDealsCardLoaderComponent } from './hot-deals-card-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HotDealsCardLoaderComponent],
  exports: [HotDealsCardLoaderComponent]
})
export class HotDealsCardLoaderModule { }
