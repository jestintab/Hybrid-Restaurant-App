import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NewsDetailPage} from '../../pages/news-detail/news-detail';
import {Service} from '../../app/service';

@Component({
    selector: 'page-news',
    templateUrl: 'news.html',
    providers: [Service]
})
export class NewsPage {
    newsList: any[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public newsService: Service) {
    }

    ngOnInit() {
        this.newsService.getData()
            .subscribe((response) => {
                this.newsList = response.newsList
            })
    }

    newsDetail(newsId) {
        this.navCtrl.push(NewsDetailPage, {
            newsId: newsId
        });
    }

}
