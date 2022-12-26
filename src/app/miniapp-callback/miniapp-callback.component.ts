import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-miniapp-callback',
  templateUrl: './miniapp-callback.component.html',
  styleUrls: ['./miniapp-callback.component.scss']
})
export class MiniappCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  paramsObject: any

  resp: any
  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe((params: any) => {
        this.paramsObject = { ...params.keys, ...params };
        console.log(this.paramsObject);
      })
  }
}