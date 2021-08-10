import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { JWT_EXPIRE_TIME } from 'src/app/shared/constants/damn-is-it-a-jwt-file';
import { User } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userData: User | null = null;

  register(userData: User): void {
    const { username } = userData;
    const userId = uuidv4();
    this.userData = { username, userId };
    localStorage.setItem(
      'youtube-client-auth',
      JSON.stringify({
        expire: Date.now() + JWT_EXPIRE_TIME,
        ...this.userData,
      })
    );
  }

  isAuthorized(): boolean {
    const data = localStorage.getItem('youtube-client-auth');
    if (data) {
      const { expire, username, userId } = JSON.parse(data);
      this.userData = { username, userId };
      return !(Date.now() > expire);
    }
    return false;
  }
}
