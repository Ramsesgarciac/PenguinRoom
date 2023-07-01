import { Injectable } from '@angular/core';
import { Firestore,  collectionData,query, where, setDoc} from '@angular/fire/firestore';
import {  collection, addDoc, doc,deleteDoc, updateDoc} from '@firebase/firestore';
import { Observable, Subject, map } from 'rxjs';
import renta from '../interfaces/cuarto.interface';

@Injectable({
  providedIn: 'root'
})
export class RentasService {

  
  id: string | undefined;
  private room$ = new Subject<any>();

  constructor(
    private firestore:Firestore,
    
  ) {
    }

  addRenta(rentA:renta){
    const rentaRef= collection(this.firestore, 'rentass');
    return addDoc(rentaRef, rentA);
  }

  getRentas(): Observable<renta[]>{
    const rentaRef= collection(this.firestore, 'rentass');
    return collectionData(rentaRef, {idField: 'id'}) as Observable<renta[]>;
  }

  getRentaById(id: string): Observable<renta | undefined> {
    const rentaRef = query(collection(this.firestore, 'rentass'), where('__name__', '==', id));
    return collectionData(rentaRef, {idField: 'id'}).pipe(
      map((rentas:any) => rentas)
    );
  }

  getRentas500to1000(): Observable<renta[]>{
    const rentaRef  = query (collection(this.firestore, 'rentass'),where('precio', '>=', 500),where('precio', '<=', 1000));
    console.log(rentaRef);
    return collectionData(rentaRef, {idField: 'id'}) as Observable<renta[]>;
  }

  getRentas1000to1500(): Observable<renta[]>{
    const rentaRef  = query (collection(this.firestore, 'rentass'),where('precio', '>=', 1000),where('precio', '<=', 1500));
    console.log(rentaRef);
    return collectionData(rentaRef, {idField: 'id'}) as Observable<renta[]>;
  }

  getRentas1500to2000(): Observable<renta[]>{
    const rentaRef  = query (collection(this.firestore, 'rentass'),where('precio', '>=', 1500),where('precio', '<=', 2000));
    console.log(rentaRef);
    return collectionData(rentaRef, {idField: 'id'}) as Observable<renta[]>;
  }

  getRentas2000to2500(): Observable<renta[]>{
    const rentaRef  = query (collection(this.firestore, 'rentass'),where('precio', '>=', 2000),where('precio', '<=', 2500));
    console.log(rentaRef);
    return collectionData(rentaRef, {idField: 'id'}) as Observable<renta[]>;
  }

  getRentas2500to3000(): Observable<renta[]>{
    const rentaRef  = query (collection(this.firestore, 'rentass'),where('precio', '>=', 2500),where('precio', '<=', 3000));
    console.log(rentaRef);
    return collectionData(rentaRef, {idField: 'id'}) as Observable<renta[]>;
  }

  deleteRentas(rentA:renta){
    const rentaDocRef = doc(this.firestore, "rentass", `${rentA.id}` );
    return deleteDoc(rentaDocRef);
  }

  editarTarjeta(id:string, room:renta){
    
    console.log(id)
    console.log(room);
    
    
    const rentaRef = doc(this.firestore, `rentass/${id}`);
    console.log(rentaRef)
    return setDoc(rentaRef, room);
  }

  addRentaEdit(room: renta){
    this.room$.next(room);
  }

  getRentaEdit(): Observable<renta>{
    return this.room$.asObservable();
  }
}