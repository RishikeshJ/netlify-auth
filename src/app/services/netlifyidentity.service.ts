import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var netlifyIdentity: any;
``
@Injectable({
  providedIn: 'root'
})
export class NetlifyidentityService {

  constructor(router: Router) { 
    netlifyIdentity.init();

    netlifyIdentity.on('init', function(user) {
      console.log('init', user)
    });

    netlifyIdentity.on('login', function(user) {   
      console.log('current user', netlifyIdentity.currentUser());
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', function() {
      console.log('Logged out'); 
      netlifyIdentity.close();
      router.navigateByUrl('/');
    });
  }
  get(): any {
    return netlifyIdentity;
}
}
