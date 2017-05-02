import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class Service {

    private sfapiUrl:string;
    private equalTo:string;
    private and:string;
    private json:string;
    private filter:string;
    private sort:string;
    private amp:string;


    constructor(private http: Http) {
      this.sfapiUrl = 'http://aljedad.com/api/sforder';
      this.equalTo = '%3D%3D';
      this.and = '%26%26';
      this.json = '?_view=json';
      this.filter = '_filter=';
      this.sort = '_sort=';
      this.amp ='&';
    }
    getData() {
        return this.http.get('assets/json/restaurantAppJson.json')
            .cache()
            .map((response: Response) => response.json());
    }
    getCategory(){
      return this.http.get(this.sfapiUrl+'/9i3njlbu8_categories/'+this.json+this.amp+this.sort+'priority+asc')
            .map((response: Response) => response.json());
    }
    getMenus(catId){
          return this.http.get(this.sfapiUrl+'/9i3njlbu8_menus/'+this.json+this.amp+this.filter+'menu_category_id'+this.equalTo+catId+this.and+'menu_status'+this.equalTo+'1'+this.amp+this.sort+'menu_priority+asc')
            .map((response: Response) => response.json());
    }
    getMenuItem(menuId){
          return this.http.get(this.sfapiUrl+'/9i3njlbu8_menus/'+menuId+this.json)
            .cache()
            .map((response: Response) => response.json());
    }
    getMenuOptions(menuId){
          return this.http.get(this.sfapiUrl+'/9i3njlbu8_menu_options/'+this.json+this.amp+this.filter+'menu_id'+this.equalTo+menuId)
            .cache()
            .map((res: Response) => res.json());
    }
    getOptionName(optionValueId,optionId){
          return this.http.get(this.sfapiUrl+'/9i3njlbu8_option_values/'+this.json+this.amp+this.filter+'option_value_id'+this.equalTo+optionValueId+this.amp+'option_id'+this.equalTo+optionId+this.sort+'priority+asc')
            .cache()
            .map((resp: Response) => resp.json());
    }



}
