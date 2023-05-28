import { Injectable, Renderer2, RendererFactory2, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private colorTheme: string;

  constructor(rendererFactory: RendererFactory2, private localStorageService: LocalStorageService) { 
    this.renderer = rendererFactory.createRenderer(null, null)
  }

  initTheme() {
    this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  updateTheme(theme: 'dark-mode' | 'light-mode') {
    
    const previousColorTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    
    this.setColorTheme(theme);
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);

  }

  isDarkMode() {
    return this.colorTheme === 'dark-mode';
  }

  private setColorTheme(theme: 'dark-mode' | 'light-mode') {
    this.colorTheme = theme;
    this.localStorageService.setItem('theme', theme);
  }

  private getColorTheme() {
    if(this.localStorageService.getItem('theme')) {
      this.colorTheme = this.localStorageService.getItem('theme')
    } else {
      this.colorTheme = 'light-mode'
    }
  }
}
