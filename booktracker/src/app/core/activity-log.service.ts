import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {

  private activitySource = new Subject<string>();
  activity$ = this.activitySource.asObservable();

  constructor() { }

  logActivity(activity: string) {
    this.activitySource.next(activity);
  }
  
}
