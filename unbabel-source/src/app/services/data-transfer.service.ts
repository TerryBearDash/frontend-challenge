import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Translation } from '../models/translation';

@Injectable()
export class DataTransferService {

  data = new Subject();
  target_id = new Subject();
  backdrop = new Subject();
  confirm = new Subject();

  constructor() {
    this.data.next([]);
    this.target_id.next(null);
    this.backdrop.next(false);
    this.confirm.next(false);
  }

}