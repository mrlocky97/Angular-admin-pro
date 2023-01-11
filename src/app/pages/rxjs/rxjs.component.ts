import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{
  public intervalS!:Subscription;
  public fRxjs!: Subscription;

  constructor() {
    this.intervalS = this.devuelveInterval().subscribe(console.log);
    this.fRxjs = this.filterRXJS().subscribe(console.log);
    // this.devuelveObservable()
    //   .pipe(
    //     retry(1)//numero de intentos
    //   )
    //   .subscribe(
    //   valor => console.log('seg: ', valor),
    //   (err) => console.warn('Error: ', err),
    //   () => console.info('End obsevable')
    // );
  }

  // es importante siempre desubcribirse de un observable
  ngOnDestroy(): void {
    this.intervalS.unsubscribe();
    this.fRxjs.unsubscribe();
  }

  devuelveInterval(): Observable<number> {
    return interval(1000)
      .pipe(
        take(4),
        map(valor => { return valor + 1; })
      );
  }

  filterRXJS(): Observable<number> {
    return interval(80)
      .pipe(
        take(10),
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0)? true: false),
      );
  }

  devuelveObservable(): Observable<number> {
    let i = -1;
    const observable$ = new Observable<number>(observer => {

      const interval = setInterval(() => {
        i++;
        observer.next(i);// emite i
        if (i === 4) {
          clearInterval(interval); // limpia el observable
          observer.complete();
        }

        if (i === 2) {
          observer.error('Error lanzado a propocito');
        }
      }, 1000)
    });

    return observable$;
  }
}
