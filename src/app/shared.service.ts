import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private subject = new Subject<any>();


  sendClickEvent(sentiments: JSON) {
    this.subject.next(sentiments);
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
