import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewSectionService } from '../service/view-section.service';

@Component({
  selector: 'app-my-introduction',
  templateUrl: './my-introduction.component.html',
  styleUrls: ['./my-introduction.component.scss']
})
export class MyIntroductionComponent implements OnInit, AfterViewInit {
  title = 'angularTests';
  list = ['Front End Entwickler']

  @ViewChild("home", { read: ElementRef })
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
        this.viewSection.selected = 0;
      }
      },options);
      this.intersection.observe(this.homeContainer.nativeElement)
  }

  ngOnInit(): void {


  }


}
