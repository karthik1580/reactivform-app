import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
// import * as AOS from 'aos';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactivform-app';
  constructor(
    private _loading: NgCircleProgressModule, 
    private _router: Router){
      this._router.events.subscribe((event: Event) => {
        this.navigationInterceptor(event);
      });
    }

    private navigationInterceptor(event: Event): void {
      if(Event instanceof NavigationStart){}
      if(Event instanceof NavigationEnd){}
      if(Event instanceof NavigationError){}
    }
}
