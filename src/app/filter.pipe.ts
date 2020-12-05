import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(beneficiaries,search:String): any {
    if(search){
      return beneficiaries.filter(beneficiaries=>{
        return beneficiaries.firstname.toLowerCase().includes(search.toLowerCase());
      });
    }
    else{
      return beneficiaries;
    }
  }

}
