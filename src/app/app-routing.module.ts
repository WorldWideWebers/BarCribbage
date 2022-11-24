import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnComponent } from './components/turn/turn.component';
import { TestHandComponent } from './components/test-hand/test-hand.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'home', component: TurnComponent },
  { path: 'test-hand', component: TestHandComponent },
  { path: 'splash', component: SplashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
