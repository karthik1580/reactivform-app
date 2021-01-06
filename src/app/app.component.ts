import { Component } from '@angular/core';
import { 
  Router, 
  Event as RouterEvent, 
  NavigationStart, 
  NavigationEnd, 
  NavigationError, 
  NavigationCancel 
} from '@angular/router';
// import * as AOS from 'aos';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactivform-app';
  public spinnerLoading = true;

  constructor(
    private _loading: NgCircleProgressModule, 
    private _router: Router){
      this._router.events
      .pipe(filter((event: any) => event instanceof NavigationStart || event instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event);
      });
    }

    private navigationInterceptor(event: RouterEvent): void {
      
      if(event instanceof NavigationStart){
        this.spinnerLoading = true;
        console.log('NavigationStart');
      }
      if(event instanceof NavigationEnd){
        this.spinnerLoading = false;
        console.log('NavigationEnd');
      }
      if(event instanceof NavigationCancel){
        this.spinnerLoading = false;
        console.log('NavigationCancel');
      }
      if(event instanceof NavigationError){
        this.spinnerLoading = false;
        console.log('NavigationError');
      }
    }
}
