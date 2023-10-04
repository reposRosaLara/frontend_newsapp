import { PagingInterface } from 'src/app/model/paging-interface';
import { NewsInterface } from '../../model/news-interface';
import { NewsService } from '../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})

export class HomeNewsComponent implements OnInit{
  length = 0;
  pageSize = 10;
  hidePageSize = true;
  pageIndex = 0;

  showAddHiddeDelete :boolean = true;
  news: NewsInterface[]= [];
  pagingnews : PagingInterface | undefined;

  constructor(private newsService: NewsService) {}
  
  ngOnInit() {
    this.getNews();
  }
  
  getNews() {
    this.newsService.getNews().subscribe({
      next: response => { 
        this.news = response.results; 
        this.pagingnews = response;
        this.length = response.count;
      }})
  }
  

  events(pageEvent : PageEvent){
    this.pageIndex = pageEvent.pageIndex;
    this.newsService.offset = pageEvent.pageSize*pageEvent.pageIndex;
    this.getNews();
  }


}
