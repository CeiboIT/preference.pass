import { ActivitiesEffects } from './effects/activities';
import { AgmCoreModule } from '@agm/core';
import { ApolloModule } from 'apollo-angular';
import { AppComponent } from './app.component';
import { AuthEffects } from './effects/auth';
import { AuthModalComponent } from './components/widgets/auth-modal/auth-modal.component';
import { AuthModalModule } from './components/widgets/auth-modal/auth-modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpModule } from '@angular/http';
import { LayoutEffects } from './effects/layout';
import { SubscriptionEffects } from './effects/subscription';
import { MdDialogModule, MdSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { provideClient } from './app.config';
import { reducer } from './reducers';
import { routing } from './app.routes';
import { services as SERVICES } from './services';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ToolbarModule } from './components/navigation/toolbar/toolbar.module';
import { FooterModule } from './components/navigation/footer/footer.module';
import { PhotoswipeModule } from './components/navigation/photoswipe/photoshipe.module';
import { UserEffects } from './effects/user';
import 'hammerjs';
import {AuthGuard} from './auth.guard';
import {OnboardingModalModule} from './components/widgets/onboarding-modal/onboarding-modal.module';
import {OnboardingModalComponent} from './components/widgets/onboarding-modal/onboarding-modal.component';
import { AlertComponent } from "./components/widgets/alert/alert.component";
import { AlertlModule } from "./components/widgets/alert/alert.module";
import {BookingEffects} from './effects/booking';
import { ToastEffects } from "./effects/toast";

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdDialogModule,
    MdSnackBarModule,
    routing,
    FroalaViewModule.forRoot(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0lBxLiH_mL9PAi48ZP5qVzmJiX22yUy8'
    }),
    SwiperModule.forRoot(SWIPER_CONFIG),
    ApolloModule.forRoot(provideClient),
    EffectsModule.run(ActivitiesEffects),
    EffectsModule.run(SubscriptionEffects),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(LayoutEffects),
    EffectsModule.run(UserEffects),
    EffectsModule.run(BookingEffects),
    EffectsModule.run(ToastEffects),
    ToolbarModule,
    FooterModule,
    PhotoswipeModule,
    AuthModalModule,
    OnboardingModalModule,
    AlertlModule
  ],
  providers: [SERVICES, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [AuthModalComponent, OnboardingModalComponent, AlertComponent]
})
export class AppModule { }
