import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NeedauthComponent } from './needauth/needauth.component';
import { NoauthComponent } from './noauth/noauth.component';
import { ProtectedRouteGuardService } from './services/protected-route-guard.service';


const routes: Routes = [
  { path: '', component:HomecomponentComponent},
  { path: 'home', component:HomecomponentComponent},
  { path: 'public', component: NoauthComponent },
  { path: 'protected', component: NeedauthComponent, canActivate: [ProtectedRouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
