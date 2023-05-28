import { Injectable } from '@angular/core';
import * as momentTz from 'moment-timezone'

@Injectable({
  providedIn: 'root'
})
export class TimeZonesService {

  constructor() { }

  loadTimeZone(): string[] {  
    return momentTz.tz.names()
  }
}
