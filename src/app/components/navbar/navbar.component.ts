import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public menuItem ="" 

  public getMenuItem (menuItem:string ){
   this.menuItem = menuItem;
   
  }
}
