import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'contact',
  templateUrl: 'contact.html'
})
export class ContactComponent {

  text: string;
  list: Array<{
    id: number;
    name: string;
    phone: string;
  }> = [];

  constructor() {
    console.log('Hello ContactComponent Component');
    this.text = 'Hello World';
    for(let i=0; i<10; i++){
      this.list.push({
        id: i+1,
        name: (i+1) + '号人工',
        phone: this.createPhoneNumber()
      })
    }
  }

  createPhoneNumber(){
    let p1 = [3, 5, 8];
    let phone = '1' + p1[Math.ceil(Math.random()*3)];
    for(let i=0; i<9; i++){
      phone += Math.floor(Math.random()*10);
    }
    return phone;
  }
  
}
