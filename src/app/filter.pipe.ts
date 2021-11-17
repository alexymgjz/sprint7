import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, type: number): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    if(type === 1){
      return items.filter(o => o.presupuestoName.includes(searchText));
    }

    return items;


  }
}
