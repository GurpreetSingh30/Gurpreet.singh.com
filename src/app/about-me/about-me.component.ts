import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  foo =false;
  highlight = false;
  cool = false;
  
  onInViewportChange(inViewport: boolean) {
    
    setTimeout(() => {
      this.foo = inViewport;
      this.highlight = inViewport;
      this.cool = inViewport;
    }, 2000)
  }



}
