import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnComponent } from './components/turn/turn.component';
import { TestHandComponent } from './components/test-hand/test-hand.component';

const routes: Routes = [
  { path: '', component: TurnComponent },
  { path: 'test-hand', component: TestHandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
