import { Component } from '@angular/core';
import { Carousel } from "../carousel/carousel";
import { Accordion } from '../accordion/accordion';
import { Contact } from "../contact/contact";
import { Trending } from "../trending/trending";
import { Upcoming } from "../upcoming/upcoming";

@Component({
  selector: 'app-home',
  imports: [Carousel, Accordion, Contact, Trending, Upcoming],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
