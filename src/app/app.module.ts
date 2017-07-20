import { ActivitiesEffects } from './effects/activities';
import { ActivityListComponent } from './components/activities/activity-list/activity-list.component';
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
import { MdDialogModule } from '@angular/material';
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
import { UserEffects } from './effects/user';
import 'hammerjs';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

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
    EffectsModule.run(AuthEffects),
    EffectsModule.run(LayoutEffects),
    EffectsModule.run(UserEffects),
    ToolbarModule,
    AuthModalModule
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent],
  entryComponents: [AuthModalComponent]
})
export class AppModule { }
