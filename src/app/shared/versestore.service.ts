import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from '@angular/fire/compat/database';
import { PromiseVerse } from '../models/promise-verse.model';
import { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VersestoreService {

  private dbPath = '/user-promises';
  userpromiseRef!: AngularFireList<PromiseVerse>;
  userpromises$ = new Subject<string>();

  constructor(private db: AngularFireDatabase) {
    this.userpromiseRef = db.list(this.dbPath);
  }

  create(userpromise: PromiseVerse): any {
    return this.userpromiseRef.push(userpromise);
  }
  // Fetch Students List
  getAll() {
    this.userpromiseRef = this.db.list('user-promises');
    return this.userpromiseRef;
  }

  getById(uid: any) {

    const queryObservable = this.userpromises$.pipe(
      switchMap(uid =>
        this.db.list('/user-promises', ref => ref.orderByChild('loggeduser').equalTo(uid)).valueChanges()
      )
    );


  }


}
