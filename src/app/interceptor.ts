import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";

import { AppService } from "./app.service";
import { Observable } from "rxjs";
declare function getKey(): any;
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private service: AppService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.service.key) {
      this.service.key = getKey() || "aa";
      this.service.key$.next(true);
      console.log(this.service.key);
    }

    return next.handle(request);
  }
}
