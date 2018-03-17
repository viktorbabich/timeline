import { Component, OnInit } from '@angular/core';
import { ModalComponent } from './modal.component';
import { EventService } from './event.service';
import { EventItem } from './event-item';


@Component({
  selector: 'app-root',
  template: `
		<div>
      <div>
        <div (click)="changeCurrentEvent(0)">test0</div>
        <div (click)="changeCurrentEvent(1)">test1</div>
      </div>
			<modal 
        (closeModal)="closeModal()"
        *ngIf="modalIsOpened" 
        [events]="events" 
        [currentEvent]="currentEvent">
      </modal>
    </div>
  `
})
export class AppComponent implements OnInit {
  events: EventItem[];
  currentEvent: number;
  modalIsOpened: boolean = false;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  changeCurrentEvent(id: number) {
    this.currentEvent = id;
    this.openModal();
  } 

  openModal() {
    this.modalIsOpened = true;
  }

  closeModal() {
    this.modalIsOpened = false;
  }

}

