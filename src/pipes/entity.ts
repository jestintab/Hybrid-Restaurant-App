import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Entity pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'entity'
})
@Injectable()
export class Entity {
  /*
    Takes a value and makes it lowercase.
   */
  transform(text) {
     let entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (let i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
  }
}
