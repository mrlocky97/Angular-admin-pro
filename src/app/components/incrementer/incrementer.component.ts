import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent {
  @Input("value") progress: number = 50; // renombra la variable para identificarla desde el padre
  // progress resive valor desde el padre
  // @Input() progress: number = 50;

  @Output("value") changeValue: EventEmitter<number> = new EventEmitter();

  // get getProgress(): string {
  //   return `${this.progress}%`;
  // }

  updateValue(value: number) {
    if (this.progress <= 0 && this.progress <= 100) {
      this.changeValue.emit(0);
      this.progress = 0;
    }

    if (this.progress >= 100 && this.progress >= 0) {
      this.changeValue.emit(100)
      this.progress = 100;
    }

    this.changeValue.emit(this.progress += value);
    this.progress += value;
  }

  onChange(newValue:number){
    if (newValue >= 100) {
      this.progress = 100;
    }else if(newValue <= 0){
      this.progress = 0;
    }else{
      this.progress = newValue;
    }

    this.changeValue.emit(this.progress);
    
  }
}
