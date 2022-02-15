import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
    
  }
menuIsOpen = false;
openCloseMenu() {
  if (!this.menuIsOpen) {
    this.menuIsOpen = true;
  }
  else {
    this.menuIsOpen = false;
  }

}

navClose(){
  this.menuIsOpen = false;
}
 
  
}
