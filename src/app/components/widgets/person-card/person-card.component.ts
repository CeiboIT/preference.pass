import { Component, OnInit, Input } from '@angular/core';
declare var document;
declare var MaterialAvatar;
@Component({
  selector: 'app-person-card',
  template: `    
    <md-card>
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
                <div class="person__name">
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
      .person__name {
        font-size: 1.2em;
      }
    `

  ]
})
export class PersonCardComponent implements OnInit {
  @Input() person;
  constructor() { }

  ngOnInit() {
    console.log('Material Avatar: ', MaterialAvatar);
    MaterialAvatar(document.getElementsByClassName('default-profile-photo'), {
      backgroundColor: '#000',
      shape: 'circle'
    });

  }

}
