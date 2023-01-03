import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-miniapp',
  templateUrl: './miniapp.component.html',
  styleUrls: ['./miniapp.component.scss']
})
export class MiniappComponent implements OnInit {

  url: string;
  messageObject = {};
  messageWithAuthKey = {
    name: "initAuth",
    clientId: "dfc737c7-1153-4594-86ce-9fd77a42e16c",
    redirectUri: "https://wutkaru.github.io/mini/mini-callback",
    responseType: "code",
    scope: "offline+openid+citizen",
    state: "123456789authorizationCode%3Db90758ce-4c2e-4696-b64c-272d87db8a66%26webviewToken%3DeyJhbGciOiJub25lIn0.eyJiYWNrVXJsIjoicGFvdGFuZzovL3Bhb3RhbmcuY28udGgvbWluaS1hcHAud2Vidmlldy5iYWNrdXJsLmRlZXBsaW5rIiwiZW5kZmxvd1VybCI6InBhb3Rhbmc6Ly9wYW90YW5nLmNvLnRoL21pbmktYXBwLndlYnZpZXcuYmFja3VybC5kZWVwbGluayIsImV4cCI6MTY3MjI5MTUxMiwiaWF0IjoxNjcyMjkwNjEyfQ."
  };

  message = {
    name: "initAuth",
    clientId: "dfc737c7-1153-4594-86ce-9fd77a42e16c",
    redirectUri: "https://wutkaru.github.io/mini/mini-callback",
    responseType: "code",
    scope: "offline+openid+citizen",
    state: "123456789"
  };

  messageOrg = {
    name: "initAuth",
    clientId: "851e4444-f5cd-40a6-89a0-c7cafc1210db",
    redirectUri: "https://miniapp-ptid-uat.web.app/miniapp-callback",
    responseType: "code",
    scope: "offline+openid",
    state: "123456789"
  }

  constructor(public appService: AppService) { 
    this.url = window.location.href;
  }


  ngOnInit(): void {
    // this.appService.CheckJSBridge();
    this.messageObject = this.appService.getMessage('messageWithAuthKey');
    let demo = document.getElementById("demo");
    if (demo) {
      demo.innerHTML ="Page location is " + window.location.href;
    }
  }
}
