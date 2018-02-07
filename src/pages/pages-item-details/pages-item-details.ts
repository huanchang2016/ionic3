import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'pages-item-details',
  templateUrl: 'pages-item-details.html'
})
export class PagesItemDetailsComponent {

  text: string;

  constructor(public alertCtrl: AlertController) {
    console.log('Hello PagesItemDetailsComponent Component');
    this.text = '新闻详情页面';
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '登录',
      subTitle: `ionic3 弹窗组件`,
      buttons: ['OK']
    });
    alert.present();
  }
}
