import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnComponent } from './components/turn/turn.component';
import { TestHandComponent } from './components/test-hand/test-hand.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', component: TurnComponent },
  { path: 'home', component: TurnComponent },
  { path: 'test-hand', component: TestHandComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
