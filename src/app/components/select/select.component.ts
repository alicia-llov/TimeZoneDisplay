import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimeZonesService } from '../../services/timeZones/time-zones.service';
import { LocalStorageService } from '../../services/localStorage/local-storage.service'
import * as moment from 'moment';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit{

  @Input()
  selectedValue: string;

  @Output()
  selectedTimeZone = new EventEmitter<string>();

  timeZones: string[];

  constructor(private timeZonesService: TimeZonesService,
    private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.timeZones = this.timeZonesService.loadTimeZone();
    // Decide whats better for ux
    //this.selectedValue =this.localStorageService.getItem('selectedTimeZone') || moment.tz.guess(true);
  }

  emitSelection(selectedValue: string) {
    this.selectedTimeZone.emit(selectedValue)
  }

}
