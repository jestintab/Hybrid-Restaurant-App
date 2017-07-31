import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';
import { Service } from '../../app/service';

@IonicPage()
@Component({
    selector: 'page-news',
    templateUrl: 'news.html',
    providers: [Service]
})
export class NewsPage {
    newsList: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public newsService: Service,
        public loading: LoadingController) {
    }

       
    ngOnInit() {
         let loader = this.loading.create({
            content: 'Loading ...',
        });
        loader.present().then(() => {
        this.newsService.getBlog()
            .subscribe((response) => {
                this.newsList = response;
                //    this.newsList.forEach(newsContent => {
                //        console.log(newsContent.id);
                //    });
                loader.dismiss();

            })

             });
    }

    newsDetail(newsId) {
        this.navCtrl.push("NewsDetailPage", {
            newsId: newsId
        });
    }

}
