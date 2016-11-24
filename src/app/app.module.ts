import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeckCardComponentComponent } from './deck-card-component/deck-card-component.component';
import {DeckofCardAPIService } from './deckof-card-api.service';

@NgModule({
  declarations: [
    AppComponent,
    DeckCardComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DeckofCardAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
