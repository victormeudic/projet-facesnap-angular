import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@NgModule({
  declarations: [AppComponent, FaceSnapComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
