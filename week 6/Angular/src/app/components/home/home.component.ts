import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../course-card/course-card.component';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, CourseCardComponent,HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  portalSearchTerm = '';

  selectedCourseId = 0;
  isLoading = true;

  courses = [
  {
    id: 1,
    name: 'Angular Basics',
    code: 'ANG101',
    credits: 3,
    gradeStatus: 'passed'
  },
  {
    id: 2,
    name: 'TypeScript',
    code: 'TS201',
    credits: 4,
    gradeStatus: 'failed'
  },
  {
    id: 3,
    name: 'Web Development',
    code: 'WEB301',
    credits: 3,
    gradeStatus: 'pending'
  }
];

  onEnrollClick() {
    alert('Enrollment opened!');
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
  trackByCourseId(index: number, course: any) {
  return course.id;
}

  ngOnInit() {
  console.log('HomeComponent initialised — courses loaded');

  setTimeout(() => {
    this.isLoading = false;
  }, 1500);
}

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }
}