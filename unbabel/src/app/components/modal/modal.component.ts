import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Translation } from '../../models/translation';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {

  data: Translation[] = [];
  target_id: number;
  backdrop: boolean;
  confirm: boolean;

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

  public confirmDelete() {
    this.data.splice(this.data.findIndex( i => (i.id === this.target_id) ), 1);
  }

  public cancelDelete() {
    this.trans.backdrop.next(false);
    this.trans.confirm.next(false);
    this.trans.target_id.next(null);
  }
}