import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
declare var document;
declare var MaterialAvatar;
@Component({
  selector: 'app-person-card',
  template: `    
    <md-card class="person-card" (click)="cardSelected()">
      <md-card-content>
        <div class="row">
          <div class="col-3">
            <div class="default-profile-photo" style="height:65px; width:65px;">
              {{ person.fullName }}
            </div>
          </div>
          <div class="col-9">
            <div class="row">
              <div class="col-12">
                <div class="person-card__name">
                  <strong>
                    {{ person.fullName }}
                  </strong>
                </div>
                <div>
                  {{ person.email}}
                </div>
              </div>
            </div>
          </div>
        </div>
          
      </md-card-content>
    </md-card>
  `,
  styles: [
    `      
      .person-card:hover {
        cursor: hand;
      }
      
      .person-card__name {
        font-size: 1.2em;
      }
    `

  ]
})
export class PersonCardComponent implements OnInit {
  @Input() person;
  @Input() selectedPersons;
  @Output() onPersonCardSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }

  cardSelected() {
    this.onPersonCardSelected.emit(this.person);
  }

  ngOnInit() {
    console.log('Material Avatar: ', MaterialAvatar);
    MaterialAvatar(document.getElementsByClassName('default-profile-photo'), {
      backgroundColor: '#000',
      shape: 'circle'
    });

  }

}
