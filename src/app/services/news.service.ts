import {  NewsInterface } from '../model/news-interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagingInterface } from '../model/paging-interface';
import { HttpClient } from '@angular/common/http';
import { FavoritesResponseRest } from '../model/favorites-response-rest';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly basedUrl: string = 'https://api.spaceflightnewsapi.net/v4/articles/'
  private readonly FavoritesbasedUrl: string = 'http://localhost:8080/newsapp'

  
  offset = 0;

  constructor(private http: HttpClient) { }

  public getNews(): Observable<PagingInterface> {
    return this.http.get<PagingInterface>(this.basedUrl.concat(`?offset=${this.offset}`))
  }

  public getFavoriteNews(): Observable<FavoritesResponseRest> {
    return this.http.get<FavoritesResponseRest>(`${this.FavoritesbasedUrl}/favorites`)
  }

  public deleteFavoriteNews(id: number): Observable<void> {
    return this.http.delete<void>(`${this.FavoritesbasedUrl}/delete/${id}`);
  }

  public addFavoriteNew(news: NewsInterface ){
    return this.http.post<NewsInterface>(`${ this.FavoritesbasedUrl}/add`, news, { responseType: 'json' });
  }
  
}
