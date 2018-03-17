import { Injectable } from '@angular/core';

import { NewsComponent }   from './news.component';
import { EventItem } from './event-item';

@Injectable()

export class EventService {
  getEvents() {
    return [
      new EventItem(NewsComponent, {title: 'test0', id: 'test0'}),
      new EventItem(NewsComponent, {title: 'test1', id: 'test1'})
    ];
  }
}
