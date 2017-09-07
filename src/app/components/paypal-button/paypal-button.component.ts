import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
declare var paypal: any;

interface Amount {
  total: string;
  currency: string;
}

interface Transaction {
  amount: Amount;
  description?: string;
}

interface Client {
  sandbox: string;
  production: string;
}

@Component({
  selector: 'app-paypal-button',
  template: `
    <div id="paypal-button-container">
      
    </div>
  `
  })
export class PaypalButtonComponent implements OnInit {
  @Input() environment;
  @Input() transactions: Transaction[];
  @Input() client: Client;
  @Output() onAuthorized: EventEmitter<any> = new EventEmitter();
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    this.generatePayPalButton();
  }

  generatePayPalButton() {
    console.log(this.elementRef);
    console.log('Element Reference: ', this.elementRef.nativeElement.querySelector('#paypal-button-container'));
    paypal.Button.render({
      env: 'production',
      commit: true,
      client: this.client,
      style: {
        size: 'responsive',
        color: 'gold',
        shape: 'rect',
      },
      payment: (paymentData, paymentActions) => {
        console.log('Inside paypal payment', paymentData);
        console.log('Inside paypal Actions', paymentActions);
        return paymentActions.payment.create({
          payment: {
            transactions: this.transactions
          }
        });
      },
      onAuthorize: (data, actions) => actions.payment.execute().then((payment) => {
        this.onAuthorized.emit(payment);
      })
    }, this.elementRef.nativeElement.querySelector('#paypal-button-container'));
  }

  destroyButton() {
    const _node = this.elementRef.nativeElement.querySelector('#paypal-button-container');
    _node.innerHTML = '';
  }

  ngOnChanges(changes) {
    this.destroyButton();
    this.generatePayPalButton();
  }

}
