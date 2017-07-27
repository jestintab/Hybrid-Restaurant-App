import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { NetworkService } from '../providers/network-service';


@Injectable()
export class Service {

  private sfapiUrl: string;
  private sflive: string;
  private equalTo: string;
  private and: string;
  private json: string;
  private filter: string;
  private sort: string;
  private amp: string;
  private body: any;
  private headers: any;
  //private options:any;  
  private postUrl: string;
  private blogUrl: string;



  constructor(private http: Http, private networkService: NetworkService) {
    this.sflive = 'https://order.sandwichfactory.qa/api/sforder'; //https://order.sandwichfactory.qa/api/sforder
    this.sfapiUrl = 'http://aljedad.com/api/sforder'; //http://aljedad.com/api/sforder
    this.equalTo = '%3D%3D';
    this.and = '%26%26';
    this.json = '?_view=json';
    this.filter = '_filter=';
    this.sort = '_sort=';
    this.amp = '&';
    this.postUrl = "http://aljedad.com/sforder/api";
    this.blogUrl = "https://sandwichfactory.qa/blog/wp-json/wp/v2/posts"

  }
  getData() {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.get('assets/json/restaurantAppJson.json')
        .map((response: Response) => response.json());
    }
  }
  getCategory() {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.get(this.sflive + '/9i3njlbu8_categories/' + this.json + this.amp + this.sort + 'priority+asc')
        .map((response: Response) => response.json());
    }
  }
  getMenus(catId) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.get(this.sflive + '/9i3njlbu8_menus/' + this.json + this.amp + this.filter + 'menu_category_id' + this.equalTo + catId + this.and + 'menu_status' + this.equalTo + '1' + this.amp + this.sort + 'menu_priority+asc')
        .map((response: Response) => response.json());
    }
  }
  getMenuItem(menuId) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.get(this.sflive + '/9i3njlbu8_menus/' + menuId + this.json)
        .map((response: Response) => response.json());
    }
  }
  getMenuOptions(menuId) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.get(this.sflive + '/9i3njlbu8_menu_options/' + this.json + this.amp + this.filter + 'menu_id' + this.equalTo + menuId)
        .map((res: Response) => res.json());
    }
  }
  getOptionName(optionValueId, optionId) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.get(this.sflive + '/9i3njlbu8_option_values/' + this.json + this.amp + this.filter + 'option_value_id' + this.equalTo + optionValueId + this.amp + 'option_id' + this.equalTo + optionId + this.sort + 'priority+asc')
        .map((resp: Response) => resp.json());
    }
  }
  postOrderDetails(orderedItems) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      this.body = 'message=' + JSON.stringify(orderedItems);
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
      return this.http.post(this.postUrl, this.body, { headers: this.headers })
        .map((res: Response) => res);
      //     .subscribe((data) => {
      //     console.log(data);
      // });
      //.catch(this.handleError);
    }
  }
  getBlog() {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.get(this.blogUrl)
        .map((res: Response) => res.json());
    }
  }
  getBlogDetail(post_id) {
    if (this.networkService.noConnection()) {
      this.networkService.showNetworkAlert();
    } else {
      return this.http.get(this.blogUrl + '/' + post_id)
        .map((res: Response) => res.json());
    }
  }

}
