import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$ = authState(this.afAuth);

  constructor(
    private afAuth: Auth
  ) { }

  register(email: any, password: any){
    return createUserWithEmailAndPassword(this.afAuth, email, password)
    .then((user)=> signInWithEmailAndPassword(this.afAuth, email, password));
  }

  login(email:any, password:any){
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logout(){
    return signOut(this.afAuth);
  }
  }

