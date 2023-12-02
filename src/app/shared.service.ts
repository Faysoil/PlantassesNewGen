// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private userNameSource = new BehaviorSubject<string | null>(null);
  userName$ = this.userNameSource.asObservable();

  private userIdSource = new BehaviorSubject<number | null>(null);
  userId$ = this.userIdSource.asObservable();

  setUserName(userName: string | null): void {
    this.userNameSource.next(userName);
  }

  setUserId(userId: number | null): void {
    this.userIdSource.next(userId);
  }
}
