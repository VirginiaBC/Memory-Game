import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [BrowserModule],
  bootstrap: [CardComponent],
})
export class AppModule {}
