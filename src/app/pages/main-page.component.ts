import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// @ts-ignore
declare function customInitFunction();

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  

  constructor(private settingsService: SettingsService){}

  ngOnInit(): void {
    customInitFunction();
  }
}
