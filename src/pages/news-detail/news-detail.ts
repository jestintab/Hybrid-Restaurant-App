import {Component} from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';
import {Service} from '../../app/service';

@IonicPage()
@Component({
    selector: 'page-news-detail',
    templateUrl: 'news-detail.html',
    providers: [Service]
})
export class NewsDetailPage {
    newsId: '';
    newsDetails: any = {}; 
    newsTitle:string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public newsService: Service) {
        this.newsId = this.navParams.get('newsId');
    }

    ngOnInit() {
        this.newsService.getBlogDetail(this.newsId)
            .subscribe((response) => {

                
                this.newsDetails.title = response.title.rendered;
                this.newsDetails.img = response.better_featured_image.media_details.sizes.medium.source_url
                this.newsDetails.date = response.date;
                this.newsDetails.content = response.content.rendered;
               console.log(this.newsDetails.content);
            //     console.log(response.title.rendered);
            //     for (let i = 0; i <= response.length - 1; i++) {
            //         if (response.id == this.newsId) {
            //             this.newsDetails = response;
            //         }
            //     }
             })
    }


}
