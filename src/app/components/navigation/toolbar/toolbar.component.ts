import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `    
    <md-toolbar>
      <md-toolbar-row>
        Preference pass
        <button md-button>Activities
        </button>
      </md-toolbar-row>
    </md-toolbar>
  
  `
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
