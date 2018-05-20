import {Component} from '@angular/core'
import { ProductsService } from './products.service';

@Component({
    selector:'products',
    template:`
    <h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let product of products">
        {{product}}
        </li>
    </ul>
    `
})
export class ProductsComponent{

    title ="List of products";
    products;

    constructor(service:ProductsService){
       
        this.products= service.getProducts();
    }

    getTitle(){
    return this.title;
    }
}

