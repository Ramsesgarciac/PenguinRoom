import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData,doc,deleteDoc, updateDoc,query, where} from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
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

  getRenta(id:string): Observable<renta[]>{
    const rentaRef= collection(this.firestore, 'rentass'+id);
    return collectionData(rentaRef, {idField: 'id'}) as Observable<renta[]>;
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

  deleteRentas(rentA:renta){
    const rentaDocRef = doc(this.firestore, "rentass", `${rentA.id}` );
    return deleteDoc(rentaDocRef);
  }

    updateRenta(id: string, rentA: renta) {
    const rentaRef = doc(this.firestore, `rentass/${rentA.id}`,id);
    return updateDoc(rentaRef, { ...rentA });
  }

  addRentaEdit(room: renta){
    this.room$.next(room);
  }

  getRentaEdit(): Observable<renta>{
    return this.room$.asObservable();
  }
}