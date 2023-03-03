import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class StorageService {
  constructor() {}

  private storageSub = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: any) {
    sessionStorage.setItem(key, data);
    this.storageSub.next('added');
  }

  removeItem(key: string) {
    sessionStorage.removeItem(key);
    this.storageSub.next('removed');
  }
}
