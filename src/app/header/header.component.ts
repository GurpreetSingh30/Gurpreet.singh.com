import { Component, OnInit } from '@angular/core';
import { ViewSectionService } from '../service/view-section.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public viewSection : ViewSectionService ) { }
 
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
