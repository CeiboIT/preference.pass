import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as userActions from '../../actions/user';
import { Store } from '@ngrx/store';
import { trigger,style,transition,animate,query,stagger } from '@angular/animations';
declare const LocalStorage: any;

@Component({
  selector: 'app-token',
  template: `    
    <div class="container">
      <div class="text-center my-5 py-5" @fadeUpAnimation>
        <h1 class="fadeUp">Welcome to PREFERENCE PASS</h1>
      </div>
    </div>
  `,
  animations: [
    trigger('fadeUpAnimation', [
      transition('* => *', [
        query('.fadeUp', style({ opacity: 0, transform: 'translateY(10px)' })),

        query('.fadeUp', stagger('100ms', [
          animate('800ms .5s ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
        ])),

        query('.fadeUp', [
          animate(1000, style('*'))
        ])
        
      ])
    ])
  ]
})
export class TokenComponent {

  constructor(private router: Router, private route: ActivatedRoute,
              private authService: AuthService,
              private store: Store<{}>) {

    this.route.params.forEach((params) => {
      this.authService.parseHash()
        .then((result) => {
          localStorage.removeItem('logout');

          this.router.navigate(['']);
          setTimeout(function () {
            location.reload();
          }, 300);

        }).catch((error) => {
        console.log(error);
        this.router.navigate(['error']);
      });
    });
  }

}
