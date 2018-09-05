import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {Socket} from 'ng-socket-io';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nickname = '';

  constructor(private navCtrl: NavController, private socket: Socket, public geolocation: Geolocation) { }
 
  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push('ChatRoomPage', { nickname: this.nickname});
  } 
    click() {
      this.navCtrl.push('MapsPage');
    }

}