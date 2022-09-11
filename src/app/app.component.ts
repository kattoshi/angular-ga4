import { Component , OnInit } from '@angular/core';
import { NgxGa4Service } from "ngx-ga4";
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private _ga4 : NgxGa4Service){ }
  async ngOnInit(): Promise<void> {
    try {
      await this._ga4.install$(environment.mesurementID);
      this._ga4.js();
      this._ga4.config();
    }
    catch(ex)
    {
      throw new Error (`Script load exception=${ex}`);
    }
  }
  onClick() {
    this._ga4.event("event_name" , 
    { 
      timestamp : new Date().toISOString()
    });
  }
}
