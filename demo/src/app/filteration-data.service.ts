import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterationDataService {
  private filterSubject = new Subject<any>();
  name=this.filterSubject.asObservable()

  sendMesage(checkboxArray: any) {
    this.filterSubject.next(checkboxArray);
    // console.log(checkboxArray)
  }

  getMEssage(): Observable<any> {
    return this.filterSubject.asObservable();
  }
  constructor() { }
}
