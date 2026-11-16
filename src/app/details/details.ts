import { Component, inject } from '@angular/core';
import { ApiService } from '../api-service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export type ExtrasTab = 'recommendations' | 'characters' | 'episodes' | 'news' | 'videos';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  product: any;
  id: number = 0;

  activeTab: ExtrasTab | null = null;
  extrasLoading = false;
  recommendations: any[] = [];
  characters: any[] = [];
  episodes: any[] = [];
  news: any[] = [];
  videos: any = { promo: [], episodes: [] };
  playingVideoId: string | null = null;

  private loaded = new Set<ExtrasTab>();

  private sanitizer = inject(DomSanitizer);

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute
  ) {}

  ngOnInit(){

    this.router.params.subscribe((params) => {
      this.id = params['id'];
      this.product = null;
      this.extrasLoading = false;
      this.activeTab = null;
      this.loaded.clear();
      this.recommendations = [];
      this.characters = [];
      this.episodes = [];
      this.news = [];
      this.videos = { promo: [], episodes: [] };
      this.playingVideoId = null;
      this.cdr.detectChanges();

      this.apiService.getdetails(this.id).subscribe((data: any) => {
        this.product = data.data;
        this.cdr.detectChanges();
      });
    });

  }

  showTab(tab: ExtrasTab) {
    if (this.activeTab === tab) {
      this.activeTab = null;
      this.playingVideoId = null;
      this.cdr.detectChanges();
      return;
    }

    this.activeTab = tab;
    this.playingVideoId = null;

    if (this.loaded.has(tab)) {
      this.cdr.detectChanges();
      return;
    }

    this.extrasLoading = true;
    this.cdr.detectChanges();

    const onDone = (data: any) => {
      this.loaded.add(tab);
      this.extrasLoading = false;
      if (tab === 'videos') {
        this.videos = data ?? { promo: [], episodes: [] };
      } else {
        (this as any)[tab] = data ?? [];
      }
      this.cdr.detectChanges();
    };

    switch (tab) {
      case 'recommendations':
        this.apiService.getrecommendations(this.id).subscribe((res: any) => onDone(res?.data));
        break;
      case 'characters':
        this.apiService.getcharacters(this.id).subscribe((res: any) => onDone(res?.data));
        break;
      case 'episodes':
        this.apiService.getepisodes(this.id).subscribe((res: any) => onDone(res?.data));
        break;
      case 'news':
        this.apiService.getnews(this.id).subscribe((res: any) => onDone(res?.data));
        break;
      case 'videos':
        this.apiService.getvideos(this.id).subscribe((res: any) => onDone(res?.data));
        break;
    }
  }

  playVideo(id: string | null) {
    this.playingVideoId = this.playingVideoId === id ? null : id;
    this.cdr.detectChanges();
  }

  embedUrlFor(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
    );
  }

  formatViews(n?: number): string {
    if (n == null) return '';
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M views';
    if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K views';
    return `${n} views`;
  }
}
