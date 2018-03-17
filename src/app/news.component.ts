import { Component, Input }  from '@angular/core';

import { EventComponent } from './event.component';

@Component({
  template: `
    <div class="news">
      <h4>{{data.title}}</h4>
    </div>
  `
})
export class NewsComponent implements EventComponent {
  @Input() data: any;
}


