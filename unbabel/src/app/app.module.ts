import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';
import { DataTransferService } from './services/data-transfer.service'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HeaderComponent, ModalComponent, CardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiService, DataTransferService]
})
export class AppModule { }
