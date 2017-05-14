import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Trunc } from './trunc';
import { Entity } from './entity';
import { OrderBy } from './order-by.ts';


@NgModule({
    declarations:[       
        Entity,
        Trunc,
        OrderBy
        
    ],
    imports:[
        

    ],
    exports:[
        Entity,
        Trunc,
        OrderBy
        
    ]
})

export class PipesModule {}