import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ParagraphComponent} from "../paragraph/paragraph.component";
import {RefDirective} from "../ref.directive";

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  form: FormGroup;
  @ViewChild(RefDirective, {static: true}) refDir: RefDirective;

  constructor( private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.form = new FormGroup({
      number: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(/^\d+$/)
      ])
    });
    this.createParagraph();

  }

  submit() {
    if(this.form.invalid){
      return
    }
    localStorage.setItem('num23', this.form.value.number);
    this.createParagraph()
  }

  remove() {
    this.form.reset();
    if(localStorage.getItem('num23')){
      localStorage.clear();
      this.refDir.containerRef.clear()
    }
  }

  createParagraph(){
    const pFactory = this.resolver.resolveComponentFactory(ParagraphComponent);
    this.refDir.containerRef.clear();

    const component = this.refDir.containerRef.createComponent(pFactory);
    component.instance.loadNumber();

    if(!component.instance.number){
      this.refDir.containerRef.clear()
    }
  }
}
