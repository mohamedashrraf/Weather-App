import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTemperatureColor]',
  standalone: true
})
export class TemperatureColorDirective {

@Input('appTemperatureColor') temp : number = 0;

  constructor(private el:ElementRef) {}

  ngOnInit(): void {
    this.setColor();

  }

  private setColor(){
    if(this.temp <= 10){
      this.el.nativeElement.style.backgroundColor = 'blue';
    }
    else if(this.temp > 10 && this.temp <= 20){
      this.el.nativeElement.style.backgroundColor = 'green';
    }
    else if(this.temp > 20 && this.temp <= 30){
      this.el.nativeElement.style.backgroundColor = 'orange';
    }
    else if(this.temp > 30){
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
