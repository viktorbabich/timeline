import { Directive, ViewContainerRef } from "@angular/core"

@Directive({
  selector: '[event-host]',
})

export class EventDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
