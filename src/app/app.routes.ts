import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { Details } from './details/details';
import { Courses } from './courses/courses';
import { CourseDetails } from './course-details/course-details';
import { Watch } from './watch/watch';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'Animes',component:Product},
    {path:'Contact',component:Contact},
    {path:'Courses',component:Courses},
    { path:'Details/:id', component: Details },
    { path:'Course/:id', component: CourseDetails },
    { path:'Watch/:id', component: Watch }

];
