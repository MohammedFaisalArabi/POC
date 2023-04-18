import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  Pant: number = 0  ;
  Coat: number = 0;
  Shirt: number = 0;
  Skirt: number = 0;
  Suit: number = 0;
  Ties: number = 0;
  Sock: number = 0;
  Jean: number = 0;
  Shoe: number = 0;
  TShirt: number = 0;

  constructor() {}

  // addition(){
  //   this.count++;
  //   return this.count;
  // }

  // subtraction(){
  //   this.count--;
  //   return this.count
  // }
  
  addCoats() {
    this.Coat++;
    return this.Coat;
  }
  addJeans() {
    this.Jean++;
    return this.Jean;
  }
  addPants() {
    this.Pant++;
    return this.Pant;
  }
  addShirts() {
    this.Shirt++;
    return this.Shirt;
  }
  addShoes() {
    this.Shoe++;
    return this.Shoe;
  }
  addSkirts() {
    this.Skirt++;
    return this.Skirt;
  }
  addSocks() {
    this.Sock++;
    return this.Sock;
  }
  addSuits() {
    this.Suit++;
    return this.Suit;
  }
  addTShirts() {
    this.TShirt++;
    return this.TShirt;
  }
  addTies() {
    this.Ties++;
    return this.Ties;
  }

  subCoats() {
    this.Coat--;
    return this.Coat;
  }
  subJeans() {
    this.Jean--;
    return this.Jean;
  }
  subPants() {
    this.Pant--;
    return this.Pant;
  }
  subShirts() {
    this.Shirt--;
    return this.Shirt;
  }
  subShoes() {
    this.Shoe--;
    return this.Shoe;
  }
  subSkirts() {
    this.Skirt--;
    return this.Skirt;
  }
  subSocks() {
    this.Sock--;
    return this.Sock;
  }
  subSuits() {
    this.Suit--;
    return this.Suit;
  }
  subTShirts() {
    this.TShirt--;
    return this.TShirt;
  }
  subTies() {
    this.Ties--;
    return this.Ties;
  }
}
