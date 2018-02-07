import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'about',
  templateUrl: 'about.html'
})
export class AboutComponent {

  text: string;

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ) {
    this.text = 'Hello World';
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: '说白了，这就是一个alert模拟的弹出框组件!',
      buttons: ['OK']
    });
    alert.present();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '修改选项类型',
      buttons: [
        {
          text: 'Destructive',
          role: '',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
