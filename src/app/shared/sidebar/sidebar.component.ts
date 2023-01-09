import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems!:any[];
  constructor(private sidebarService:SidebarService){
    this.menuItems = this.sidebarService.menu;
    console.log(this.menuItems);
  }
}
