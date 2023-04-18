import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../calculate.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contentdata',
  templateUrl: './contentdata.component.html',
  styleUrls: ['./contentdata.component.css'],
})
export class ContentdataComponent implements OnInit {

  cal: any;

  shirt=new Array
  coat=new Array
  pant=new Array
  tie=new Array
  Tshirt=new Array
  skirt=new Array
  sock=new Array
  suit=new Array
  jean=new Array
  shoe=new Array




  constructor(private count: CalculateService) {}

  ngOnInit(): void {
  }

  // addProduct() {
  //   this.cal = this.count.addition();
  //   this.arr.push({
  //     Shirts:this.cal,
  //     Coats:this.cal,
  //     Pants:this.cal
  //   });
  //     localStorage.setItem('Product', JSON.stringify(this.arr));
  // }

  // subProduct() {
  //   this.cal = this.count.subtraction();
  //   this.arr.push({})
  //   localStorage.setItem('Product', JSON.stringify(this.cal));
  // }

  addShirts() {
    this.cal = this.count.addShirts();
    this.shirt.push({
      Shirt:this.cal
    })
    localStorage.setItem('Shirts',JSON.stringify(this.shirt));

    let getShirt= JSON.parse(localStorage.getItem("Shirts")!);
  }

  addCoats() {
    this.cal = this.count.addCoats();
    this.coat.push({
      Coat:this.cal
    })
    localStorage.setItem('Coats', JSON.stringify(this.coat));
  }

  addPants() {
    this.cal = this.count.addPants();
    this.pant.push({
      Pants:this.cal
    })
    localStorage.setItem('Pants', JSON.stringify(this.pant));
  }

  addShoes() {
    this.cal = this.count.addShoes();
    this.shoe.push({
      Shoes:this.cal
    })
    localStorage.setItem('Shoes', JSON.stringify(this.shoe));
  }

  addSuits() {
    this.cal = this.count.addSuits();
    this.suit.push({
      Suits:this.cal
    })
    localStorage.setItem('Suits', JSON.stringify(this.suit));
  }

  addSkirts() {
    this.cal = this.count.addSkirts();
    this.skirt.push({
      Skirts:this.cal
    })
    localStorage.setItem('Skirts', JSON.stringify(this.skirt));
  }

  addTShirts() {
    this.cal = this.count.addTShirts();
    this.Tshirt.push({
      TShirts:this.cal
    })
    localStorage.setItem('TShirts', JSON.stringify(this.Tshirt));
  }

  addJeans() {
    this.cal = this.count.addJeans();
    this.jean.push({
      Jeans:this.cal
    })
    localStorage.setItem('Jeans', JSON.stringify(this.jean));
  }

  addTies() {
    this.cal = this.count.addTies();
    this.tie.push({
      Ties:this.cal
    })
    localStorage.setItem('Ties', JSON.stringify(this.tie));
  }

  addSocks() {
    this.cal = this.count.addSocks();
    this.sock.push({
      Socks:this.cal
    })
    localStorage.setItem('Socks', JSON.stringify(this.sock));
  }

  remShirts() {
    this.cal = this.count.subShirts();
    this.shirt.pop()
    localStorage.setItem('Shirts', JSON.stringify(this.shirt));
  }

  remCoats() {
    this.cal = this.count.subCoats();
    this.coat.pop()
    localStorage.setItem('Coats', JSON.stringify(this.coat));
  }

  remPants() {
    this.cal = this.count.subPants();
    this.pant.pop()
    localStorage.setItem('Pants', JSON.stringify(this.pant));
  }

  remShoes() {
    this.cal = this.count.subShoes();
    this.shoe.pop()
    localStorage.setItem('Shoes', JSON.stringify(this.shoe));
  }

  remSuits() {
    this.cal = this.count.subSuits();
    this.suit.pop()
    localStorage.setItem('Suits', JSON.stringify(this.suit));
  }

  remSkirts() {
    this.cal = this.count.subSkirts();
    this.skirt.pop()
    localStorage.setItem('Skirts', JSON.stringify(this.skirt));
  }

  remTShirts() {
    this.cal = this.count.subTShirts();
    this.Tshirt.pop()
    localStorage.setItem('TShirts', JSON.stringify(this.Tshirt));
  }

  remJeans() {
    this.cal = this.count.subJeans();
    this.jean.pop()
    localStorage.setItem('Jeans', JSON.stringify(this.jean));
  }

  remTies() {
    this.cal = this.count.subTies();
    this.tie.pop()
    localStorage.setItem('Ties', JSON.stringify(this.tie));
  }

  remSocks() {
    this.cal = this.count.subSocks();
    this.sock.pop()
    localStorage.setItem('Socks', JSON.stringify(this.sock));
  }
}
