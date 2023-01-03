import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export interface JavascriptCallback {
  closeWebview(): any;
  shareImageEvent(data: any): any;
}

declare const android: JavascriptCallback;
declare const window: any;
declare const webkit: any;

@Injectable({
  providedIn: "root",
})
export class AppService {

  private message = {
    name: "initAuth",
    clientId: "dfc737c7-1153-4594-86ce-9fd77a42e16c",
    redirectUri: "https://wutkaru.github.io/mini/mini-callback",
    responseType: "code",
    scope: "offline+openid+citizen",
    state: "123456789"
  };
  
  private messageWithAuthKey = {
    ...this.message,
    state: "123456789"
  };
  
  private messageOrg = {
    name: "initAuth",
    clientId: "851e4444-f5cd-40a6-89a0-c7cafc1210db",
    redirectUri: "https://miniapp-ptid-uat.web.app/miniapp-callback",
    responseType: "code",
    scope: "offline+openid",
    state: "123456789"
  }

  constructor(private route: ActivatedRoute) { }
  public close() {
    console.log("close webview");

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.indexOf("android") > -1;
    try {
      if (isAndroid) {
        console.log("isAndroid");
        android.closeWebview();
      } else {
        window.webkit.messageHandlers.observer.postMessage({
          name: "closeWebview",
        });
      }
    } catch (error) {
      console.log("isWeb");
    }
  }

  public getMessage(){
    return this.message;
  }

  public getMessageWithAuthKey(){
    return {
      ...this.message,
      state: this.getState()
    }
  }
  public getMessageOrg(){
    return this.messageOrg;
  }

  private getState(): string {
    const params = this.route.snapshot.queryParams;
    const state = Object.keys(params).map((key) => { 
      return key + "%3D" + params[key]; // key=value
    }).join("%26"); // &
    return state;
  }

  public CheckJSBridge() {
    let data = this.getMessageWithAuthKey();
    console.log("CheckJSBridge ", data);

    if (window.JSBridge) {
      // android
      window.JSBridge.initAuth?.(
        data.clientId,
        data.redirectUri,
        data.responseType,
        data.scope,
        data.state
      );
    } else if (window.webkit) {
      // ios
      window.webkit.messageHandlers.observer.postMessage(data);
    }
  }
}
