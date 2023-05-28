import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{
 title: string = 'Infovista'
 isDarkMode: boolean;

 constructor(private themeService: ThemeService,
             private localStorageService: LocalStorageService) {}

 ngOnInit(): void {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
 }

 toggleThemeMode():void {
  
  if(this.isDarkMode) {
    this.themeService.updateTheme('light-mode')
  } else {
    this.themeService.updateTheme('dark-mode')
  }

 }
}
