import { Pipe, PipeTransform } from '@angular/core';
import { TableColumns } from './TableColumns';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(value: TableColumns[], args: string): unknown {
    if(!args){
      return value;
    }
    return value.filter(
      item => item.brandName.toLowerCase().indexOf(args.toLowerCase()) > -1 
    );
  }

}
