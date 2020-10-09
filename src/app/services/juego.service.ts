import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Juegos from 'src/app/models/juegos';

@Injectable({
  providedIn: 'root'
})

export class JuegoService {

  private dbPath = '/juegos';

  juegosRef: AngularFireList<Juegos> = null;

  constructor(private db: AngularFireDatabase) {
    this.juegosRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Juegos> {
    return this.juegosRef;
  }

  create(juego: Juegos): any {
    return this.juegosRef.push(juego);
  }

  update(key: string, value: any): Promise<void> {
    return this.juegosRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.juegosRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.juegosRef.remove();
  }

}
