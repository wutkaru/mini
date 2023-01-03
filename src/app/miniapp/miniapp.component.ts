import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-miniapp',
  templateUrl: './miniapp.component.html',
  styleUrls: ['./miniapp.component.scss']
})
export class MiniappComponent implements OnInit {

  messageObject = {};
  constructor(public appService: AppService) { }


  ngOnInit(): void {
    // this.appService.CheckJSBridge();
    this.messageObject = this.appService.getMessage('messageWithAuthKey');
  }
}
