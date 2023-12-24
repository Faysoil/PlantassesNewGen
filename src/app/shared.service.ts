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

  private user_idSource = new BehaviorSubject<string | null>(null);
  _id$ = this.user_idSource.asObservable();

  setUserName(userName: string | null): void {
    this.userNameSource.next(userName);
  }

  setUserId(userId: number | null): void {
    this.userIdSource.next(userId);
  }

  setUser_Id(_id: string | null): void {
    this.user_idSource.next(_id);
  }
}
