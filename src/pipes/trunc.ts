import { Injectable, Pipe } from '@angular/core';
import 'rxjs/Rx';

/*
  Generated class for the OrderBy pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'trunc',
  pure: false
})

export class Trunc  {
  /*
    Takes a value and makes it lowercase.
   */
   transform(value: any) {
     return Math.trunc(value);
  }
}
