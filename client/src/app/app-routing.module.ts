import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PcPartPageComponent } from './components/pages/pc-part-page/pc-part-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'part/:partId', component: PcPartPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
