import {Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSidenav} from '@angular/material';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'pwe-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  close(reason: string) {
    this.sidenav.close();
  }

  signOut() {
    this.authenticationService.SignOut();
  }

  constructor(private breakpointObserver: BreakpointObserver, private authenticationService: AuthenticationService) {}

}
