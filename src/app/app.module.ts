import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardModule } from '@angular/fire/auth-guard';

import { provideFirebaseApp} from '@angular/fire/app'
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment.prod';

import { getFirestore,provideFirestore,  } from '@angular/fire/firestore';
import { getAuth,provideAuth } from '@angular/fire/auth';
import { getStorage,provideStorage } from '@angular/fire/storage';
import { getAnalytics,provideAnalytics } from '@angular/fire/analytics';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  provideFirestore(()=> getFirestore()),
  provideAuth(()=> getAuth()),
  provideStorage(()=> getStorage()),
  provideAnalytics(()=> getAnalytics()),
  AuthGuardModule
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
