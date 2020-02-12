import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {isEmpty} from "rxjs/operators";

@Component({
  selector: 'app-params-analyzer',
  templateUrl: './params-analyzer.component.html',
  styleUrls: ['./params-analyzer.component.scss']
})
export class ParamsAnalyzerComponent {
  params: {};
  showMessage = false;
  constructor(private route: ActivatedRoute) {
  }

  getParams() {
    this.route.queryParams.subscribe(params =>{
      if(Object.keys(params).length){
        this.params = {...params};
      }else {
        this.showMessage = true
      }
    })

  }
}
