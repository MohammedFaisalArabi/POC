import { Component, OnInit } from '@angular/core';
import { ContentdataComponent } from '../contentdata/contentdata.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // res:any

  constructor(private cal:ContentdataComponent) {}

  ngOnInit(): void {
  }

  // addRes(){
  //   this.res=this.cal.addNo();
  //   localStorage.getItem(JSON.parse(this.res));
  //   console.log(this.cal.addNo());
  //   return JSON.parse(this.res);
  // }

  // subRes(){
  //   this.res=this.cal.subNo();
  //   localStorage.getItem(JSON.parse(this.res));
  //   console.log(this.cal.subNo());
  //   return JSON.parse(this.res);
  // }

}
