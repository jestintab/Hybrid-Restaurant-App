import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Service} from '../../app/service';


@Component({
    selector: 'page-news-detail',
    templateUrl: 'news-detail.html',
    providers: [Service]
})
export class NewsDetailPage {
    newsId: '';
    newsDetails: any = {};

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public newsService: Service) {
        this.newsId = this.navParams.get('newsId');
    }

    ngOnInit() {
        this.newsService.getData()
            .subscribe((response) => {
                for (let i = 0; i <= response.newsList.length - 1; i++) {
                    if (response.newsList[i].id == this.newsId) {
                        this.newsDetails = response.newsList[i];
                    }
                }
            })
    }


}
