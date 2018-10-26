import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
names:string[];
content:string;

menuclick = function(menu_name){

alert('clicked on menu '+menu_name);

}
  constructor() {
    this.names = ["Home","About","gallery","Help","Contact us"];
  this.content ="CLiCK THIS "; 
  }

  ngOnInit() {
  }

}
