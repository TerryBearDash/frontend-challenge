import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() GetData = new EventEmitter();
  @Output() UploadData = new EventEmitter();
  @Output() Errors = new EventEmitter();

  @Input() data: any[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.api.get('5ae1c5792d00004d009d7e5c').subscribe( (res: any) => { this.GetData.emit(res) }, err => { this.Errors.emit(err) });
  }

  public uploadData() {
    this.api.post('5ae1c5792d00004d009d7e5c', this.data).subscribe( (res: any) => { this.UploadData.emit(res) }, err => { this.Errors.emit(err) });
  }

}