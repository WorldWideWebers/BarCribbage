import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShownDeckComponent } from './components/shown-deck/shown-deck.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ShownDeckComponent, CardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
