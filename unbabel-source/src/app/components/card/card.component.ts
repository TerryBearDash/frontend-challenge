import { Component, OnDestroy } from '@angular/core';
import { Translation } from '../../models/translation';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnDestroy {

  data: Translation[] = [];
  target_id: number;
  backdrop: boolean;
  confirm: boolean;

  _data: Translation[] = [];
  _errors: any[];

  constructor(
    private trans: DataTransferService
  ) {
    this.trans.data.subscribe( (res: any[]) => { this.data = res; });
    this.trans.backdrop.subscribe( (res: boolean) => { this.backdrop = res; });
    this.trans.confirm.subscribe( (res: boolean) => { this.confirm = res; });
    this.trans.target_id.subscribe( (res: number) => { this.target_id = res; });
  }

  ngOnDestroy() {
    this.trans.data.unsubscribe();
    this.trans.backdrop.unsubscribe();
    this.trans.confirm.unsubscribe();
    this.trans.target_id.unsubscribe();
  }

  public deleteRow(id: number) {
    this.trans.backdrop.next(true);
    this.trans.confirm.next(true);
    this.trans.target_id.next(id);
  }

  public addRow() {
    this._data.push(new Translation({ id: null, text: 'Enter Content', voice: 'Enter Title' }));
  }

  private generateId() {
    return this.data.length > 0 ? this.data[this.data.length-1].id+1 : 1;
  }

  public saveRow(i) {
    i.id = this.generateId();
    this.data.push(i);
    this._data = [];
    this.trans.data.next(this.data);
  }

  public cancelRow() {
    this._data = [];
  }

}