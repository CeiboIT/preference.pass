import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../../../models/activity';
import { compress } from '../../../constants/filestack';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
  animations: [
    trigger('fadeLeftAnimation', [
      transition('* => *', [
        query('.fadeLeft', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.fadeLeft', stagger('100ms', [
          animate('800ms 1s ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.fadeLeft', [
          animate(1000, style('*'))
        ])
        
      ])
    ]),
    trigger('fadeUpAnimation', [
      transition('* => *', [
        query('.fadeUp', style({ opacity: 0, transform: 'translateY(40px)' })),

        query('.fadeUp', stagger('100ms', [
          animate('800ms 1s ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
        ])),

        query('.fadeUp', [
          animate(1000, style('*'))
        ])
        
      ])
    ])
  ]
})
export class ActivityDetailComponent {
  @Input() activity;
  @Input() user;
  @Output() selectedRate: EventEmitter<any> = new EventEmitter();
  state: string = 'small';
  constructor(
    private router: Router
  ) { }

  goToLanding(): void {
    this.router.navigate(['/landing']);
  }

  onRateSelected($event) {
    this.selectedRate.emit($event);
  }

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

  bookNow($event) {
    console.log('Book now');
    this.selectedRate.emit($event);
  }
  get activityCover() {
    if (this.activity.coverPhoto) {
      return compress(this.activity.coverPhoto.url);
    } else {
      return '';
    }
  }

}
