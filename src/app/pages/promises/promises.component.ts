import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.getUsers()
      .then(users => {
        console.log(users);
      });
  }

  getUsers(){
    const promise = new Promise(resolve =>{
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())// extrae el body en json
        .then(body => resolve(body.data));
    });

    return promise;
  }
  
}
