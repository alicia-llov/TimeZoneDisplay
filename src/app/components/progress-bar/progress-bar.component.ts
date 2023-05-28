import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import * as moment from 'moment';
import { LocalStorageService } from '../../services/localStorage/local-storage.service'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input()
  selectedTimeZone: string = ''

  dotPercentage: string = '';
  dotValue: number;
  currentTimeDisplay: string;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    
    this.timeByTimeZone(this.selectedTimeZone)
    setInterval(() => {
      this.timeByTimeZone(this.selectedTimeZone)
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.localStorageService.setItem('selectedTimeZone', changes['selectedTimeZone'].currentValue)
    this.timeByTimeZone(changes['selectedTimeZone'].currentValue)
  }

  calculatePercentage() {
    const secondsInADay = 24 * 60 * 60;
    const now = moment().tz(this.selectedTimeZone)
    const hours = now.hours() * 60 * 60;
    const minutes = now.minutes() * 60;
    const seconds = now.seconds();
    const totalSeconds = hours + minutes + seconds;

    this.dotValue = Math.round(100 * totalSeconds/secondsInADay)
    this.dotPercentage = 100 * totalSeconds/secondsInADay + '%';
  }

  timeByTimeZone(timeZone: string) {
    this.currentTimeDisplay = moment().tz(timeZone).format("HH:mm:ss")
    this.calculatePercentage()
  }

}
