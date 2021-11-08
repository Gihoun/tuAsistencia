import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {
  qrURL = 'http://localhost:1337/asistencias';

  constructor(
    private barcodeScanner: BarcodeScanner,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}
  back() {
    this.navCtrl.navigateBack(['/docente']);
  }
}
