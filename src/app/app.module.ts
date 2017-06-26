import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {ToolbarModule} from './components/navigation/toolbar/toolbar.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { routing } from './app.routes';
import {LayoutEffects} from './effects/layout';
import {EffectsModule} from '@ngrx/effects';
import {reducer} from './reducers';
import {StoreModule} from '@ngrx/store';
import {MdDialogModule} from '@angular/material';
import {AuthModalComponent} from './components/widgets/auth-modal/auth-modal.component';
import {AuthModalModule} from "./components/widgets/auth-modal/auth-modal.module";
import {UserEffects} from "./effects/user";
import {AuthService} from "./services/auth.service";
import {EmailSignupModule} from "./modules/forms/email-signup/email-signup.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdDialogModule,
    FlexLayoutModule,
    routing,
    StoreModule.provideStore(reducer),
    EffectsModule.run(LayoutEffects),
    EffectsModule.run(UserEffects),
    ToolbarModule,
    AuthModalModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [AuthModalComponent]
})
export class AppModule { }
