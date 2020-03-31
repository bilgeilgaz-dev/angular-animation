import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTPService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducer/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './effects/profile.effects';
import { LoginEffects } from './effects/login.effects';
import { environment } from './../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/card/card.component';
import { TextComponent } from './shared/text/text.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([LoginEffects, ProfileEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    
    BrowserAnimationsModule
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
