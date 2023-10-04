import { Pipe, PipeTransform } from '@angular/core';
import { NewsInterface } from '../model/news-interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(news: NewsInterface[], searchText: string): any[] {
    if (!news) return [];
    if (!searchText) return news;
    
    return news.filter(news => news.title.toLowerCase().includes(searchText.toLowerCase()));
    };
  }
