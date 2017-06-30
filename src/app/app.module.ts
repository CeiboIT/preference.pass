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
import {AuthModalModule} from './components/widgets/auth-modal/auth-modal.module';
import {UserEffects} from './effects/user';
import {ActivitiesEffects} from './effects/activities';
import {AuthService} from './services/auth.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {ActivitiesService} from './services/activities/activities.service';
import {ApolloModule} from 'apollo-angular';
import {provideClient} from './app.config';

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
    ApolloModule.forRoot(provideClient),
    EffectsModule.run(LayoutEffects),
    EffectsModule.run(UserEffects),
    EffectsModule.run(ActivitiesEffects),
    ToolbarModule,
    AuthModalModule,
    FlexLayoutModule
  ],
  providers: [AuthService, ActivitiesService],
  bootstrap: [AppComponent],
  entryComponents: [AuthModalComponent]
})
export class AppModule { }
