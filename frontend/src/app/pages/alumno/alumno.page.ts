import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  
  scanner = 'https://qrcodescan.in/'
  usuario: any = [];
  scannedCode = null;
  constructor(private actRoute: ActivatedRoute,private barcodeScanner: BarcodeScanner,private client: HttpClient) {
    this.actRoute.queryParams.subscribe((params) => {
      this.usuario = JSON.parse(params.userlogin);
    });
  }

  ngOnInit() {
  }

  scanCode(){
    this.client.get(this.scanner)
  }
}
