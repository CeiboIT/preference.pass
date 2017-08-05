import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {SubscriptionService} from '../../../services/subscriptions/subscription.service';
import {CardValidationResponse} from '../../../models/subscription';

@Component({
  selector: 'app-onboarding-modal',
  template: `    
    <div class="modal-container justify-content-center">
      <div class="w-100" class="o-hidden d-block d-sm-none">
        <button md-button md-dialog-close class="pull-right mb-2" style="min-width: auto;"><i class="fa fa-close"></i></button>
      </div>
      <app-onboardstep1 *ngIf="isStep1" (onValid)="onStep1Valid($event)"
      (changeStep)="changeToStep2()" [feedback]="step1Feedback"
      >
      </app-onboardstep1>
      <app-onboardstep2 *ngIf="isStep2">
        
      </app-onboardstep2>
    </div>
  `,
  styles: [`
      .modal-container {
        min-height: 30vh;
      }
  `]
})
export class OnboardingModalComponent implements OnInit {
  public step;
  public step1Feedback = {};
  constructor(private store: Store<any>, private subscriptionService: SubscriptionService) { }
  ngOnInit() {
    this.calculateInitialStep();
  }
  calculateInitialStep() {
    this.step = 1;
  }
  changeToStep2() {
    this.step = 2;
  }
  get isStep1() {
    return this.step === 1;
  }

  get isStep2() {
    return this.step === 2;
  }

  onStep1Valid($event) {
    this.subscriptionService.validatePPCard($event)
      .then((res: CardValidationResponse) => {
        if (!res.validCard) {
          Object.assign(this.step1Feedback, {}, {
            invalid: !res.validCard
          });
        } else {
          this.changeToStep2();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

}
