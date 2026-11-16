import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COURSES } from './course-data';

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  courses = COURSES;
}
