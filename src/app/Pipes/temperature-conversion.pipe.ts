import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConversion',
  standalone: true
})
export class TemperatureConversionPipe implements PipeTransform {

 transform(value: number, unit:string): number | null {
    if(value && !isNaN(value)){
      if(unit === 'C'){
        return value;
        // return (value - 32) * 5/9;
      }else if(unit === 'F'){
        return (value * 9/5) + 32;
      }
    }
    return null;
  }

}
