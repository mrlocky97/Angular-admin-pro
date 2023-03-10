import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      title:'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu:[
        {
          title:'Main',
          url:'/'
        },
        {
          title: 'Progress bar',
          url: 'progress'
        },
        {
          title: 'Graph',
          url: 'graph'
        },
        {
          title: 'promises',
          url: 'promises'
        },
        {
          title: 'rxjs',
          url: 'rxjs'
        }
      ]
    }
  ];


  constructor() { }
}
