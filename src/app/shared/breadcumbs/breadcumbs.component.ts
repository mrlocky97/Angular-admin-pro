import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcumbs',
  templateUrl: './breadcumbs.component.html',
  styleUrls: ['./breadcumbs.component.css']
})
export class BreadcumbsComponent implements OnDestroy{
  public title!: string;
  public titleSubs$!: Subscription;

  constructor(private router: Router) {
    this.titleSubs$ = this.getArumentsRoute()
      .subscribe(data => {
        this.title = data['title'];
        document.title = `AdminPro - ${this.title}`
      });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getArumentsRoute(): Observable<Data>{
    return this.router.events
      .pipe(// para preguntar por una clase
        filter<any>(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }
}
