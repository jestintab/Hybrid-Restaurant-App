import { Injectable, Pipe } from '@angular/core';
import 'rxjs/Rx';

/*
  Generated class for the OrderBy pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'orderBy',
  pure: false
})

export class OrderBy  {
  /*
    Takes a value and makes it lowercase.
   */
   transform(value: any[], expression: any, ex1:any, ex2:any, reverse?: boolean): any {
    if (!value) {
      return value;
    }

    let array: any[] = value.sort((a: any, b: any): number => {
      //console.log(expression);
      //console.log(a[expression][ex1][ex2]);
      //console.log(a['values']['name']['value']);
      return a[expression][ex1][ex2] > b[expression][ex1][ex2] ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }

    return array;
  }
}
