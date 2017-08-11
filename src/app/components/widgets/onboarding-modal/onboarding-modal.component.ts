import {Component, Inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {SubscriptionService} from '../../../services/subscriptions/subscription.service';
import {CardValidationResponse} from '../../../models/subscription';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-onboarding-modal',
  template: `    
    <div class="modal-container justify-content-center">
      <div class="w-100 text-right hidden-md-up">
        <button md-button md-dialog-close class="mb-2 close"><i class="fa fa-close"></i></button>
      </div>
      <app-onboardstep1 *ngIf="isStep1"
                        (onSuccess)="step1Success($event)"
      >
      </app-onboardstep1>
    </div>
  `,
  styles: [`
    .close {
      margin: -15px -15px 0 0;
      min-width: auto;
    }
  `],
})
export class OnboardingModalComponent implements OnInit {
  public step;
  public step1Feedback = {};
  constructor(private store: Store<any>, private subscriptionService: SubscriptionService,  @Inject(MD_DIALOG_DATA) public data: any) {
    this.step = this.data.startOnStep;
  }
  ngOnInit() {

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

  step1Success($event) {
    console.log($event);
  }

  /*
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
  }*/

}
