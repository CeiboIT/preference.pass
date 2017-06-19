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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    ToolbarModule,
    routing,
    StoreModule.provideStore(reducer),
    EffectsModule.run(LayoutEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
