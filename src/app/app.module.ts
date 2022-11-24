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
import { SplashComponent } from './splash/splash.component';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCKbHCmk4JrM3-Fy02rgDFfmuzSPcMyE0Q',
//   authDomain: 'barcribbage.firebaseapp.com',
//   databaseURL: 'https://barcribbage.firebaseio.com',
//   projectId: 'barcribbage',
//   storageBucket: 'barcribbage.appspot.com',
//   messagingSenderId: '121043302329',
//   appId: '1:121043302329:web:d772a0d660ea4c3508e868',
//   measurementId: 'G-TVT72TP93E'
// };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DeckComponent,
    CardComponent,
    TurnComponent,
    HandComponent,
    TestHandComponent,
    SplashComponent
  ],
  providers: [TurnService],
  bootstrap: [AppComponent]
})
export class AppModule {}
