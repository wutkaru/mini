import { Injectable } from "@angular/core";

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

  public CheckJSBridge() {
    var data = {
      clientId: "dfc737c7-1153-4594-86ce-9fd77a42e16c",
      redirectUri: `https://wutkaru.github.io/mini/mini-callback`,
      responseType: "code",
      scope: "offline+openid+citizen",
      state: "123456789", // generate string or uuid length > 8
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
