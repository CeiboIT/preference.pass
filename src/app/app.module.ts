import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ToolbarModule } from './components/navigation/toolbar/toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routing } from './app.routes';
import { LayoutEffects } from './effects/layout';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers';
import { StoreModule } from '@ngrx/store';
import { MdDialogModule } from '@angular/material';
import { AuthModalComponent } from './components/widgets/auth-modal/auth-modal.component';
import { AuthModalModule } from './components/widgets/auth-modal/auth-modal.module';
import { AuthEffects } from './effects/auth';
import { ActivitiesEffects } from './effects/activities';
import { AuthService } from './services/auth.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ActivitiesService } from './services/activities/activities.service';
import { ApolloModule } from 'apollo-angular';
import { provideClient } from './app.config';
import { UserService } from './services/user.service';
import { UserEffects } from './effects/user';

import { AgmCoreModule } from '@agm/core';

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
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0lBxLiH_mL9PAi48ZP5qVzmJiX22yUy8'
    }),
    ApolloModule.forRoot(provideClient),
    EffectsModule.run(LayoutEffects),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(ActivitiesEffects),
    EffectsModule.run(UserEffects),
    ToolbarModule,
    AuthModalModule,
    FlexLayoutModule
  ],
  providers: [AuthService, ActivitiesService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [AuthModalComponent]
})
export class AppModule { }
