import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MaterialModule} from '@angular/material';
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
    HttpModule,
      MaterialModule.forRoot(),
  ],
  providers: [DeckofCardAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
