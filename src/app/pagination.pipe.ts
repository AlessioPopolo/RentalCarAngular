import { Pipe, PipeTransform } from '@angular/core';
import {thePagination} from "./model/MyTableConfig";

@Pipe({name: 'pagination'})
export class PaginationPipe implements PipeTransform {
  transform(value: any[], page: number): any {
    return [ ...value.slice( thePagination.itemPerPage*(page) , thePagination.itemPerPage*(page+1)  )]
  }
}
