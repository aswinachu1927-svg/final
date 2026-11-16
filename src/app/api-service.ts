import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { FALLBACK_TOP_ANIME } from './local-anime-data';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = 'https://api.tenrai.org/v1';

  constructor(private http: HttpClient) { }

  /** Live API request that degrades to `fallback` when Tenrai is unreachable. */
  private safe<T>(request: Observable<T>, fallback: T, label: string): Observable<T> {
    return request.pipe(
      timeout(4000),
      catchError((err) => {
        console.warn(`${label} unavailable, using local fallback data.`, err);
        return of(fallback);
      })
    );
  }

  getproducts() {
    return this.safe(this.http.get(`${this.baseUrl}/anime`), { data: FALLBACK_TOP_ANIME }, 'Tenrai API');
  }

  getdetails(id: any) {
    const found = FALLBACK_TOP_ANIME.find((a) => a.mal_id === Number(id))
      ?? FALLBACK_TOP_ANIME[0];
    return this.safe(this.http.get(`${this.baseUrl}/anime/${id}/full`), { data: found }, 'Tenrai API');
  }

  getrecommendations(id: any) {
    return this.safe(this.http.get(`${this.baseUrl}/anime/${id}/recommendations`), { data: [] }, 'Recommendations API');
  }

  getcharacters(id: any) {
    return this.safe(this.http.get(`${this.baseUrl}/anime/${id}/characters`), { data: [] }, 'Characters API');
  }

  getepisodes(id: any) {
    return this.safe(this.http.get(`${this.baseUrl}/anime/${id}/episodes`), { data: [] }, 'Episodes API');
  }

  getnews(id: any) {
    return this.safe(this.http.get(`${this.baseUrl}/anime/${id}/news`), { data: [] }, 'News API');
  }

  getvideos(id: any) {
    return this.safe(this.http.get(`${this.baseUrl}/anime/${id}/videos`), { data: { promo: [], episodes: [] } }, 'Videos API');
  }

  getwatchepisodes(id: any) {
    return this.safe(this.http.get(`${this.baseUrl}/anime/${id}/videos/episodes`), { pagination: { last_visible_page: 1, has_next_page: false }, data: [] }, 'Watch Episodes API');
  }
}
