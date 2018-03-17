import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModalComponent } from './modal.component';
import { NewsComponent } from './news.component';
import { EventDirective } from './event.directive';
import { EventService } from './event.service';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NewsComponent,
    EventDirective
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [NewsComponent],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
