import { Component, OnInit } from '@angular/core';

import { NetlifyidentityService } from '../services/netlifyidentity.service';

@Component({
  selector: 'app-nav-module',
  templateUrl: './nav-module.component.html',
  styleUrls: ['./nav-module.component.css']
})
export class NavModuleComponent implements OnInit {
  netlifyService: NetlifyidentityService
  constructor(ns: NetlifyidentityService) { 
    this.netlifyService = ns;
  }

  openModal(): void {
    console.log("open modal");
    this.netlifyService.get().open();
  }

  logout(): void {
    console.log("Logout");
    this.netlifyService.get().logout();
  }

  ngOnInit() {
  }

}
