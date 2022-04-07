import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewSectionService } from '../service/view-section.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit, AfterViewInit {


  @ViewChild("mySkills", { read: ElementRef })
  homeContainer!: ElementRef;
  intersection!: IntersectionObserver;

  constructor(public viewSection: ViewSectionService) { }
  ngAfterViewInit(): void {
    const options = {
      rootMargin: "0px",
      threshold: 0.5
    }
    this.intersection = new IntersectionObserver(elements => {
      const element = elements[0];
      console.log(element);
      if (element.isIntersecting) {
        this.viewSection.selected = 1;
      }
    }, options);
    this.intersection.observe(this.homeContainer.nativeElement)
  }

  ngOnInit(): void {
  }

}
