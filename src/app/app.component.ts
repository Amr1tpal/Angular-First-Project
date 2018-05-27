import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './Favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  post = {
    title:"Title",
    isFavorite:false
  }
  onFavoriteChanged(eventArgs:FavoriteChangeEventArgs){
    console.log("Favorite Changed: ",eventArgs);
  }
}
