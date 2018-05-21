import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsService } from './products/products.service';
import { ProductsComponent } from './products/products.component';
import { FavoriteComponent } from './Favorite/favorite.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FavoriteComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
