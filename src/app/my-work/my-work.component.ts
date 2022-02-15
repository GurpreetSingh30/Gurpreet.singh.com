import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  showAll: boolean;
  showAngular: boolean;
  showJavaScript: boolean;

  constructor() {
    this.showAll = true;
    this.showAngular = false;
    this.showJavaScript = false;
   }

  ngOnInit(): void {
  }
showAllProjects() {
    this.showAll=true; 
    this.showAngular=true;
    this.showJavaScript=true;
  }

  showAngularProjects() {
    this.showAll=false; 
    this.showAngular=true;
    this.showJavaScript=false;
  }

  showJavaScriptProjects() {
    this.showAll=false; 
    this.showAngular=false;
    this.showJavaScript=true;
  }
}
