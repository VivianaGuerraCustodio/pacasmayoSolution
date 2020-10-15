import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { FirstViewComponent } from './components/first-view/first-view.component'


const routes: Routes = [
  
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: FirstViewComponent },
  /*{ path: "**", component: PageNotFoundComponent },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
export const routing = RouterModule.forRoot(routes);