import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { AnnotateComponent } from './annotate/annotate.component';
import { TracksService } from './tracks.service';


@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    AnnotateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TracksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
