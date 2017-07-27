import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Error404Component } from './404/error-404.component';
import { routing } from './errors.routes';

@NgModule({
  imports: [routing, CommonModule],
  declarations: [
    Error404Component
  ],
  exports: [
    Error404Component
  ]
})

export class ErrorsModule {}
