import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-miniapp',
  templateUrl: './miniapp.component.html',
  styleUrls: ['./miniapp.component.scss']
})
export class MiniappComponent implements OnInit {

  constructor(private appService: AppService) { }


  ngOnInit(): void {
    this.appService.CheckJSBridge();
  }
}
