import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  pure: false
})
export class PaginationPipe implements PipeTransform {
  transform(value: any[], currentPage: number, currentItems: number): any {
    return [ ...value.slice( currentItems*(currentPage) , currentItems*(currentPage+1)  )]
  }
}
