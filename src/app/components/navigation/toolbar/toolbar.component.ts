import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `    
    <md-toolbar color="primary">
      Preference pass
      <span fxFlex></span>
      <button md-button>Activities
      </button>
    </md-toolbar>
  
  `
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
