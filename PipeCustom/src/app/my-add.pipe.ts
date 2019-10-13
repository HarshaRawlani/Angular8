import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform 
{
  transform(value: any, param: any): any 
  {
    return value + param;
  }
}
