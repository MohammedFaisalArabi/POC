import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtable',
  templateUrl: './newtable.component.html',
  styleUrls: ['./newtable.component.css']
})
export class NewtableComponent implements OnInit {

  tbl = document.getElementById('table');
  i:any
  r:any

  constructor() { }

  ngOnInit(): void {
  }

  createRow(){
  }

}
