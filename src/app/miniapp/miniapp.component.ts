import { Component, OnInit } from '@angular/core';
declare function CheckJSBridge(): any;

@Component({
  selector: 'app-miniapp',
  templateUrl: './miniapp.component.html',
  styleUrls: ['./miniapp.component.scss']
})
export class MiniappComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    CheckJSBridge()
  }

}
