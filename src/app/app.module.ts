import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerAddComponent } from './player-add/player-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerListComponent,
    PlayerEditComponent,
    PlayerAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
