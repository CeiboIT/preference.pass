import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {onStateChangeObservable} from '../../../utils/store';
import {FormBuilder, FormGroup} from '@angular/forms';
import { SearchPPCard } from '../../../actions/subscription';

@Component({
  selector: 'app-pp-card-container',
  template: `    
    <div>
      <h2>
        Preference Pass Card
      </h2>
      <app-preference-pass-card-form [parent]="card"
        (onValid)="onPPCardValid($event)"
      ></app-preference-pass-card-form>
    </div>
  `
})
export class PpCardContainerComponent implements OnInit {
  @Input() user$: Observable<any>;
  public card: FormGroup;
  constructor(private store: Store<any>, private fb: FormBuilder) { }

  ngOnInit() {
    this.user$ = onStateChangeObservable(this.store, 'auth.user');
    this.card = this.fb.group({
      code: []
    });
  }

  onPPCardValid($event) {
      this.store.dispatch(new SearchPPCard($event));
  }

}