import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewSectionService } from '../service/view-section.service';
declare let AOS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
 

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    const options = {
      rootMargin: '0px',
      threshold: 0.1
    }

  }

}
