import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { JWT_EXPIRE_TIME } from 'src/app/shared/constants/damn-is-it-a-jwt-file';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public _userData: User | null = null;

  public get userData(): User | null {
    return this._userData;
  }

  public set userData(data: User | null) {
    this._userData = data;
  }

  public user: Subject<User | null> = new Subject();

  constructor(private router: Router) {
    this.user.subscribe((user: User | null) => (this.userData = user));
  }

  register(userData: User): void {
    const { username } = userData;
    const userId = uuidv4();
    this.user.next({ userId, username });
    localStorage.setItem(
      'youtube-client-auth',
      JSON.stringify({
        expire: Date.now() + JWT_EXPIRE_TIME,
        ...this.userData,
      })
    );
  }

  isAuthorized(): boolean {
    let isNotExpired = false;
    const data = localStorage.getItem('youtube-client-auth');
    if (data) {
      const { expire, username, userId } = JSON.parse(data);
      isNotExpired = AuthService.isTokenExpired(expire);
      if (isNotExpired) this.user.next({ userId, username });
    }
    return isNotExpired;
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('youtube-client-auth');
    this.router.navigate(['auth']);
  }

  static isTokenExpired(expire: number): boolean {
    return !(Date.now() > expire);
  }
}
