import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findCourse } from '../courses/course-data';

@Component({
  selector: 'app-course-details',
  imports: [RouterLink],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  course: any;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.params['id']);
    this.course = findCourse(id);
  }
}
