import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-char-counter',
  templateUrl: './char-counter.component.html',
  styleUrls: ['./char-counter.component.scss']
})
export class CharCounterComponent implements OnInit {
  form: FormGroup;
  symbol: string = '';
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      line: new FormControl('', Validators.required)
    })
  }

  submit() {
    this.symbol = this.countChars(this.form.value.line)
  }
  countChars(line: string): string {
    const obj = line.replace(/\s/g, '').toLocaleLowerCase().split("")
      .reduce((res, count) => (res[count] = (res[count] || 0) + 1, res), {});
    let maxVal = Math.max.apply(null, Object.values(obj));
    let maxChar = '';
    for (let key in obj){
      if(obj[key]=== maxVal) maxChar = key;
    }
    return maxChar;
  }

  changeLine(event) {
    this.symbol = '';
  }
}
