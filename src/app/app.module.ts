import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddJuegoComponent } from './components/add-juego/add-juego.component';
import { JuegoDetailsComponent } from './components/juego-details/juego-details.component';
import { JuegoListComponent } from './components/juego-list/juego-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJuegoComponent,
    JuegoDetailsComponent,
    JuegoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
