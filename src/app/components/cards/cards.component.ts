import { NewsInterface } from './../../model/news-interface';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, filter, of, switchMap } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit{

  @Input()
  newsArray: NewsInterface[]= [];
  @Input()
  showAddHiddeDelete :boolean = true;

  enable: boolean = false;
  @Output()
  value:NewsInterface;
  searchText: string = ''
  searchForm!: FormGroup;
  newstitle : string[] = [];
  searchResult: { } = [];
  
  constructor(private formbuilder:FormBuilder, private newsService : NewsService){
    this.value = {
      id: 0,
      title: '',
      url: '',
      image_url: '',
      news_site: '',
      summary: '',
      published_at: new Date(),
      updated_at: new Date(),
      featured: false
    }
  }

  ngOnInit() {
    this.newsArray.filter(news => {
      this.newstitle.push(news.title);
    });
    this.searchForm = this.formbuilder.group({
      searchBar: ''
    });
    this.onChanges();
  }

  onChanges() {
    this.searchForm.get('searchBar')?.valueChanges.pipe(
      filter(data => data.trim().length > 0),
      debounceTime(500),
      switchMap((id: string) => {
        return id ? this.newsSearchFilter(id.replace(/[\s]/g,'')) : of([]);
      })
    ).subscribe(newsArray => {
      this.searchResult = newsArray as Array<{}>;
    })
  }

  newsSearchFilter(searchValue: string){
    return of(this.newsArray.filter( news => news.title.replace(/[\s]/g,'').toLowerCase().indexOf(searchValue.toLowerCase()) === 0 ));
  }

  AgregarFavoritos(news : NewsInterface){
    if (news != null) {
      this.newsService.addFavoriteNew(news).subscribe();
    } 
  }

  EliminarFavoritos(news: NewsInterface){
    if (news.id != null) {
      this.newsService.deleteFavoriteNews(news.id).subscribe();
      location.reload();
      }
  }

  
}
