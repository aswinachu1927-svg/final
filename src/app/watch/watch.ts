import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api-service';

@Component({
  selector: 'app-watch',
  imports: [RouterLink],
  templateUrl: './watch.html',
  styleUrl: './watch.css',
})
export class Watch {

  id: number = 0;
  product: any = null;
  episodes: any[] = [];
  selected: any = null;
  loading = true;

  private apiService = inject(ApiService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(ActivatedRoute);

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
      this.loading = true;
      this.product = null;
      this.episodes = [];
      this.selected = null;
      this.cdr.detectChanges();

      this.apiService.getdetails(this.id).subscribe((data: any) => {
        this.product = data?.data ?? null;
        this.cdr.detectChanges();
      });

      this.apiService.getwatchepisodes(this.id).subscribe((res: any) => {
        // API returns entries newest-first; binge in episode order instead
        this.episodes = (res?.data ?? []).slice().reverse();
        this.selected = this.episodes[0] ?? null;
        this.loading = false;
        this.cdr.detectChanges();
      });
    });
  }

  select(ep: any) {
    this.selected = ep;
    this.cdr.detectChanges();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
