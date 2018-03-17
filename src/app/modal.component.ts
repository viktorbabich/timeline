import { 
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';

import { EventDirective } from './event.directive';
import { EventItem }      from './event-item';
import { EventComponent } from './event.component';

@Component({
  selector: 'modal',
  template: `
		<div class="modal">
      <div (click)="onCloseModal()">X</div>
      <ng-template event-host></ng-template>
		</div>
  `
})
export class ModalComponent implements OnInit {
  @Input() events: EventItem[];
  @Input() currentEvent: number;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  @ViewChild(EventDirective) eventHost: EventDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  onCloseModal() {
    this.closeModal.emit(null);
  }

  loadComponent() {
    if(isNaN(this.currentEvent)) return;

    let eventItem = this.events[this.currentEvent];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(eventItem.component);

    let viewContainerRef = this.eventHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<EventComponent>componentRef.instance).data = eventItem.data;
  }

}



