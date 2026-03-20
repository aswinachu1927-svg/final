import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { Details } from './details/details';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'Animes',component:Product},
    {path:'Contact',component:Contact},
    { path:'Details/:id', component: Details }

];
