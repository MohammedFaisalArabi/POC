import { Component, OnInit } from '@angular/core';
import { ContentdataComponent } from '../contentdata/contentdata.component';

@Component({
  selector: 'app-cartdata',
  templateUrl: './cartdata.component.html',
  styleUrls: ['./cartdata.component.css'],
})
export class CartdataComponent implements OnInit {
  res = this.total;
  shirt = new Array();
  coat = new Array();
  pant = new Array();
  tie = new Array();
  Tshirt = new Array();
  skirt = new Array();
  sock = new Array();
  suit = new Array();
  jean = new Array();
  shoe = new Array();

  constructor(private total: ContentdataComponent) {}

  ngOnInit(): void {
    this.shirt = JSON.parse(localStorage.getItem('Shirts')!);
    this.jean = JSON.parse(localStorage.getItem('Jeans')!);
    this.Tshirt = JSON.parse(localStorage.getItem('TShirts')!);
    this.sock = JSON.parse(localStorage.getItem('Socks')!);
    this.shoe = JSON.parse(localStorage.getItem('Shoes')!);
    this.suit = JSON.parse(localStorage.getItem('Suits')!);
    this.skirt = JSON.parse(localStorage.getItem('Skirts')!);
    this.pant = JSON.parse(localStorage.getItem('Pants')!);
    this.tie = JSON.parse(localStorage.getItem('Ties')!);
    this.coat = JSON.parse(localStorage.getItem('Coats')!);
  }

  get() {
    return JSON.parse(localStorage.getItem('Shirts')!);
  }

  getRes() {
    console.log(this.shirt.length);
    console.log(this.jean.length);
    console.log(this.Tshirt.length);
    console.log(this.sock.length);
    console.log(this.shoe.length);
    console.log(this.suit.length);
    console.log(this.skirt.length);
    console.log(this.pant.length);
    console.log(this.tie.length);
    console.log(this.coat.length);
    return this.shirt;
  }

  prod: TotalProduct[] = [
    { ProductName: 'Shirts', ProductTotal: localStorage.getItem('Shirts') },
    { ProductName: 'Jeans', ProductTotal: localStorage.getItem('Jeans') },
    { ProductName: 'T-Shirts', ProductTotal: localStorage.getItem('TShirts') },
    { ProductName: 'Socks', ProductTotal: localStorage.getItem('Socks') },
    { ProductName: 'shoes', ProductTotal: localStorage.getItem('Shoes') },
    { ProductName: 'Suits', ProductTotal: localStorage.getItem('Suits') },
    { ProductName: 'Skirts', ProductTotal: localStorage.getItem('Skirts') },
    { ProductName: 'Pants', ProductTotal: localStorage.getItem('Pants') },
    { ProductName: 'Ties', ProductTotal: localStorage.getItem('Ties') },
    { ProductName: 'Coats', ProductTotal: localStorage.getItem('Coats') },
  ];
}

class TotalProduct {
  ProductName: any;
  ProductTotal: any;
}
