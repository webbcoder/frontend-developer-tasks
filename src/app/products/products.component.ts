import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Option {
  metal_type: string;
  metal_color: string;
  stone_shape: string;
  gemstone_color: string;
}

export interface Product {
  id: number;
  title: string;
  sku: string;
  image: string;
  price: number;
  currency: string;
  options: Option[]
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getProducts(){
    const response = this.http.get('http://54.39.188.42/', {
      responseType: "text"
    })
      .subscribe(response => {
        this.products = JSON.parse(atob(response))
      })

  }
}
