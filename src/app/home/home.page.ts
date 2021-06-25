import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser,public platform: Platform) {

    this.platform.ready().then(()=>{
      const browser = this.iab.create('https://proftac.com/',"_blank","location=no,zoom=no,hidden=yes");
      browser.on("loadstop").subscribe((e)=>{
        browser.show()
      })
      browser.on("exit").subscribe((e)=>{
        navigator["app"].exitApp()
      })
    })

  }

}
