import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export default class AppService {
  public isSettingsActive: Subject<boolean> = new Subject();
}
