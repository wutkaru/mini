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

  private getState(): string {
    const params = this.route.snapshot.queryParams;
    const state = Object.keys(params).map((key) => { 
      return key + "%3D" + params[key]; // key=value
    }).join("%26"); // &
    return state;
  }

  public CheckJSBridge() {
    var data = {
      clientId: "dfc737c7-1153-4594-86ce-9fd77a42e16c",
      redirectUri: `https://wutkaru.github.io/mini/mini-callback`,
      responseType: "code",
      scope: "offline+openid+citizen",
      state: this.getState(), // generate string or uuid length > 8
    };
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
      window.webkit.messageHandlers.observer.postMessage({
        name: "initAuth",
        ...data,
      });
    }
  }
}
