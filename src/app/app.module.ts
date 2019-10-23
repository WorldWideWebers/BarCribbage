import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeckComponent } from './components/deck/deck.component';
import { CardComponent } from './components/card/card.component';
import { TurnService } from './services/turn-service';
import { TurnComponent } from './components/turn/turn.component';
import { HandComponent } from './components/hand/hand.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [AppComponent, DeckComponent, CardComponent, TurnComponent, HandComponent],
  providers: [TurnService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
