import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getproducts(){
return this.http.get('https://api.jikan.moe/v4/top/anime');
}

getdetails(id:any){
return this.http.get(`https://api.jikan.moe/v4/anime/${id}`);
}
}
