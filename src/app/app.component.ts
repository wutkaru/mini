import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { AppService } from "./app.service";
declare function CheckJSBridge(): any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Miniapp";
  version = environment.version;

  constructor(public service: AppService) {}

  ngOnInit() {
    this.service.post().toPromise();
  }
}
