import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {
  color: string = '';
  number: number = null;

  loadNumber() {
    let value = localStorage.getItem('num23');
    if(value){
      this.number = parseInt(value);
      this.color = this.number %2 == 0 ? 'green': 'red';
    }
  }

}
