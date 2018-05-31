import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite:boolean;
  @Output('favourite-change') change = new EventEmitter();
  title:string;


  onClick(){

    this.isFavorite=!this.isFavorite;
    this.change.emit(this.isFavorite);
  }
  constructor() { }

  ngOnInit() {
  }
}
export interface FavoriteChangeEventArgs{
    
  newValue:boolean;
}

