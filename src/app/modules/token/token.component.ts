import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as userActions from '../../actions/user';
import { Store } from '@ngrx/store';
declare const LocalStorage: any;
// import { lastVisitedUrl } from '../../constants/app.constants';

@Component({
  selector: 'app-token',
  template: `    
    <div class="container">
      <h3>Welcome to PREFERENCE PASS</h3>
    </div>
  `
})
export class TokenComponent {

  constructor(private router: Router, private route: ActivatedRoute,
              private authService: AuthService,
              private store: Store<{}>) {

    this.route.params.forEach((params) => {
      this.authService.parseHash()
        .then((result) => {
          localStorage.removeItem('logout');
          // this.store.dispatch(new userActions.SaveUser(result));
          /*if(localStorage.getItem(lastVisitedUrl)){
           this.router.navigateByUrl(localStorage.getItem(lastVisitedUrl))
           } else {*/
          this.router.navigate(['']);
          // }
        }).catch((error) => {
        this.router.navigate(['error']);
      });
    });
  }

}
