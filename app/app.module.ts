import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { TcsComponent } from './tcs/tcs.component';
import { HighlightDirective } from './highlight.directive';

export const environment = {
  apiKey: 'AIzaSyChCehtF-FR0beACkuH_0kQ4KQmgx5ihSQ',
  authDomain: 'stackblitz-ionic-first.firebaseapp.com',
  databaseURL: 'https://stackblitz-ionic-first.firebaseio.com',
  projectId: 'stackblitz-ionic-first',
  storageBucket: 'stackblitz-ionic-first.appspot.com',
  messagingSenderId: '829389311693',
};
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TcsComponent,
    HighlightDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
