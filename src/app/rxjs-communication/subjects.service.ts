import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subject: Subject<any>;
  private behaviorSubject: BehaviorSubject<any>;
  private replaySubject: ReplaySubject<any>;

  constructor() { 
    this.subject = new Subject<any>();
    this.behaviorSubject = new BehaviorSubject<string>('Hello there!');
    this.replaySubject = new ReplaySubject<any>();
  }

  sendMessage(message:string) {
    console.log('sending message', message);
    this.subject.next(message);
    this.behaviorSubject.next(message);
    this.replaySubject.next(message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getMessageBehavior(): Observable<any> {
    return this.behaviorSubject.asObservable();
  }

  getMessageReplay(): Observable<any> {
    return this.replaySubject.asObservable();
  }

}
