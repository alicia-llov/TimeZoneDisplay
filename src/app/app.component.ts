import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from './services/localStorage/local-storage.service'
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  selectedTimeZone: string;
  
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.selectedTimeZone = this.localStorageService.getItem('selectedTimeZone') || moment.tz.guess(true);
  }

  getTimeZone(timeZone: string) {
    this.selectedTimeZone = timeZone
  }
}
