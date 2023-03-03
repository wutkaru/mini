import { Component, OnInit } from "@angular/core";
import { interval, Observable } from "rxjs";
import { AppService } from "../app.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  key: string = "token";
  constructor(public service: AppService) {}

  ngOnInit() {
    // const myObservable = interval(1000).subscribe((value) => {
    //   console.log(value);
    //   // if (this.service.key) {
    //   console.log(this.service.key);
    //   this.key = sessionStorage.getItem("key") || "";
    //   // }
    // });
  }

  getKey() {
    this.key = sessionStorage.getItem("key") || "";
    window.addEventListener("storage", (e) => {
      if (e.storageArea === sessionStorage && e.key === "key") {
        this.key = e.newValue || "";
      }
    });
  }
}
