import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ParagraphComponent } from './paragraph/paragraph.component';
import {RefDirective} from "./ref.directive";
import { CharCounterComponent } from './char-counter/char-counter.component';
import { ParamsAnalyzerComponent } from './params-analyzer/params-analyzer.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    ParagraphComponent,
    RefDirective,
    CharCounterComponent,
    ParamsAnalyzerComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [ParagraphComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
