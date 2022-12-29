import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-miniapp-callback',
  templateUrl: './miniapp-callback.component.html',
  styleUrls: ['./miniapp-callback.component.scss']
})

export class MiniappCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public appService: AppService,
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