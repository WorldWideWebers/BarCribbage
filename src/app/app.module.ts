import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeckComponent } from './components/deck/deck.component';
import { CardComponent } from './components/card/card.component';
import { TurnService } from './services/turn-service';
import { TurnComponent } from './components/turn/turn.component';
import { HandComponent } from './components/hand/hand.component';
import { TestHandComponent } from './components/test-hand/test-hand.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [AppComponent, DeckComponent, CardComponent, TurnComponent, HandComponent, TestHandComponent],
  providers: [TurnService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
