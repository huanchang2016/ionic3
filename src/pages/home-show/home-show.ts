import { AboutComponent } from './../../components/about/about';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home-show',
  templateUrl: 'home-show.html'
})
export class HomeShowPage implements OnInit {
    constructor(public navCtrl: NavController){}

    ngOnInit(){

    }

    navTo(){
      this.navCtrl.push(AboutComponent);
    }
}