import { Component } from '@angular/core';
import { ApiService } from '../api-service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accordion } from "../accordion/accordion";

@Component({
  selector: 'app-details',
  imports: [Accordion],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  product: any;
  id: number = 0;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute
  ) {}

  ngOnInit(){

    this.id = this.router.snapshot.params['id'];

    this.apiService.getdetails(this.id).subscribe((data: any) => {
      this.product = data.data;
      this.cdr.detectChanges();
    });

  }

}
