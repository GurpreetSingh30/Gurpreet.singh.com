import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { ViewSectionService } from '../service/view-section.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit,AfterViewInit {

  @ViewChild("aboutme", { read: ElementRef })
  homeContainer!: ElementRef;
  intersection!: IntersectionObserver;

  constructor(public viewSection: ViewSectionService) { }
  ngAfterViewInit(): void {
    const options = {
      rootMargin: "0px",
      threshold: 0.5
    }
    this.intersection = new IntersectionObserver(elements =>{
      const element = elements[0];
      console.log(element);
      
      if(element.isIntersecting){
        this.viewSection.selected = 3;
      }
      },options);
      this.intersection.observe(this.homeContainer.nativeElement)
  }
  

  ngOnInit(): void {
  AOS.init();
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
