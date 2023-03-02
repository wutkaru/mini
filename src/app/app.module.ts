import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { Interceptor } from "./interceptor";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MiniappComponent } from "./miniapp/miniapp.component";
import { MiniappCallbackComponent } from "./miniapp-callback/miniapp-callback.component";
import { AppService } from "./app.service";
import { TestComponent } from "./test/test.component";

@NgModule({
  declarations: [
    AppComponent,
    MiniappComponent,
    MiniappCallbackComponent,
    TestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
