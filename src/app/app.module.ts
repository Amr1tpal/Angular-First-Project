import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsService } from './products/products.service';
import { ProductsComponent } from './products/products.component';
import { FavoriteComponent } from './Favorite/favorite.component';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
