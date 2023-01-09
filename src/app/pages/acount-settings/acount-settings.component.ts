import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styleUrls: ['./acount-settings.component.css']
})
export class AcountSettingsComponent  implements OnInit{
  
  constructor(private settingsService:SettingsService){}

  ngOnInit(): void {
    this.settingsService.currentTheme();
  }

  changeTheme(theme:string){
    this.settingsService.changeTheme(theme);
  }

 
}
