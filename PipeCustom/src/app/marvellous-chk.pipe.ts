import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform 
{
  transform(value: number, param: string): string 
  {
    switch(param.toLowerCase())
    {
      case "even":
        return (value % 2 == 0) ? value+" is Even number." : value+" is not Even number.";
      case "odd":
        return (value % 2 == 0) ? value+" is not Odd number." : value+" is Odd number.";
      case "prime":
        return this.chkPrime(value);
      case "perfect":
        return this.chkPerfect(value);
      default:
        return "Please enter appropriate parameter for checking status of given value: "+value;
    }
  }
  
  
  chkPrime(value)
  {
    let i, flag = 0;
   
    for(i = 2; i <= value/2; ++i)
    {
      if(value%i == 0)
      {
        flag = 1;
        break;
      }
    }
    if (value == 1) 
    {
      return "1 is neither a prime nor a composite number.";
    }
    else 
    {
      if (flag == 0)
        return value+" is a Prime number.";
      else
        return value+" is not a Prime number.";
    }
  }
  
  chkPerfect(value)
  {
    let i=1,sum=0;
 
    while(i<value)
    {
      if(value % i == 0)
        sum=sum+i;
      i++;
    }
    if(sum == value)
      return value+" is a Perfect number";
    else
      return value+" is a Perfect number";
  }    
}
