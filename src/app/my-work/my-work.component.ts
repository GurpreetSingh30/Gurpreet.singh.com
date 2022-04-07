import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewSectionService } from '../service/view-section.service';




@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit, AfterViewInit {

  selected:number = 0;
  
  showAll: boolean;
  showAngular: boolean;
  showJavaScript: boolean;

  @ViewChild("mywork", { read: ElementRef })
  homeContainer!: ElementRef;
  intersection!: IntersectionObserver;

  constructor(public viewSection: ViewSectionService) {
    this.showAll = true;
    this.showAngular = false;
    this.showJavaScript = false;

  }
  ngAfterViewInit(): void {
    const options = {
      rootMargin: "0px",
      threshold: 0.5
    }
    this.intersection = new IntersectionObserver(elements => {
      const element = elements[0];
      if (element.isIntersecting) {
        this.viewSection.selected = 2;
      }
    }, options);
    this.intersection.observe(this.homeContainer.nativeElement)
  }

  ngOnInit(): void {
  }

  showAllProjects() {
    this.showAll = true;
    this.showAngular = true;
    this.showJavaScript = true;
  }

  showAngularProjects() {
    this.showAll = false;
    this.showAngular = true;
    this.showJavaScript = false;
  }

  showJavaScriptProjects() {
    this.showAll = false;
    this.showAngular = false;
    this.showJavaScript = true;
  }
}


