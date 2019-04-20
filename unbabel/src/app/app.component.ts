import { Component, OnInit } from '@angular/core';
import { Translation } from './models/translation';
import { DataTransferService } from './services/data-transfer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  data: Translation[] = [];
  backdrop: boolean;
  confirm: boolean;
  target_id: number;
  
  constructor(
    public trans: DataTransferService
  ) {
    this.trans.data.subscribe( (res: any[]) => { this.data = res; });
    this.trans.backdrop.subscribe( (res: boolean) => { this.backdrop = res; });
    this.trans.confirm.subscribe( (res: boolean) => { this.confirm = res; });
    this.trans.target_id.subscribe( (res: number) => { this.target_id = res; });
  }

  public getDataReturn(value) {
    this.trans.data.next(value);
  }
}
