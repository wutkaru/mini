import { Component, OnInit } from "@angular/core";
import { interval, Observable } from "rxjs";
import { AppService } from "../app.service";
import { takeUntil, catchError, takeWhile } from "rxjs/operators";
@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  key: string = "token";
  constructor(public service: AppService) {}

  ngOnInit() {
    const subscription = interval(1000).subscribe((value) => {
      if (this.service.key) {
        this.key = sessionStorage.getItem("key") || "";
        subscription.unsubscribe();
      } else if (value === 1000) {
        subscription.unsubscribe();
      }
    });
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
