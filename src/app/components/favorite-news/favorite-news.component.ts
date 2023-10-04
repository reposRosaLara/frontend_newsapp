import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsInterface } from 'src/app/model/news-interface';

@Component({
  selector: 'app-favorite-news',
  templateUrl: './favorite-news.component.html',
  styleUrls: ['./favorite-news.component.css']
})
export class FavoriteNewsComponent {

  favoriteNews: NewsInterface[] = [];
  showAddHiddeDelete :boolean = false;

  constructor(private newsService: NewsService) {
  }
  
  ngOnInit() {
    this.getFavoriteNews();
  }
  

  getFavoriteNews(){
     this.newsService.getFavoriteNews().subscribe({
      next: (res) => { this.favoriteNews = res.favoritesResponse.favoriteList },
      error: (error) => { alert(error.message) }
    }
  );
    
}
  

  
}
