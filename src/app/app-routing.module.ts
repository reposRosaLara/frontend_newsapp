import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { FavoriteNewsComponent } from './components/favorite-news/favorite-news.component';

const routes: Routes = [
  {
    path: '',
    component: HomeNewsComponent
  },
  {
    path: 'home',
    component: HomeNewsComponent
  },
  {
    path: 'favorite-news',
    component: FavoriteNewsComponent
  },
  {
    path: '**',
    component: HomeNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
