import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeShowPage } from './../home-show/home-show';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public list: Array<any> = [];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        id: i + 1,
        name: '这是第' + (i + 1) + '条数据'
      })
    }
  }

  ngOnInit() {

  }
  console = (id) => {
    console.log(id);
    this.navCtrl.push(HomeShowPage);
  }

}
