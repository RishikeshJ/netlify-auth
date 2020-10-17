import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NetlifyidentityService } from './netlifyidentity.service'
@Injectable({
  providedIn: 'root'
})
export class ProtectedRouteGuardService implements CanActivate{

  constructor(private service: NetlifyidentityService) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): | boolean{
    if(this.service.get().currentUser() != null){
      return true;
    }
    alert('You must be authenticated to view the secret Dinosaur!');
    return false;
  }
}
