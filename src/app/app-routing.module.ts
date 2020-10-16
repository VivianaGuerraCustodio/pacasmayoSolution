import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FirstViewComponent } from './components/first-view/first-view.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { NavBarBottomComponent } from './components/nav-bar-bottom/nav-bar-bottom.component'
import { PointersComponent } from './components/pointers/pointers.component'

export const routes: Routes = [
  { path: "pointer", component: PointersComponent },
  { path: "navBar", component: NavBarBottomComponent },
  { path: "login", component: SignInComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: FirstViewComponent },
  // { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

export const routing = RouterModule.forRoot(routes);