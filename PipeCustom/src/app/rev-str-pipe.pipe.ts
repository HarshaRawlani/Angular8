import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revStrPipe'
})
export class RevStrPipePipe implements PipeTransform {

  transform(value: String): String 
  {
    var revStr:String = "";
    let end = value.length -1;
    for(let i=0; i<value.length ;i++)
    {
      revStr += value[end];
      end--;
    }
    return revStr;
  }
}
