import { Type } from '@angular/core';

export class EventItem {
  constructor(public component: Type<any>, public data: any) {}
}
