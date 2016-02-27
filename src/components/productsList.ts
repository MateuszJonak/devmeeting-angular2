import {Component, View} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

import { ProductComponent } from "./product";
import { ProductsSpecialComponent } from "./productsSpecial";
import { Product } from '../entity/product.entity';

@Component({
    selector: 'products-list',
})
@View({
    templateUrl: 'views/productsList.html',
    //Any directive we want to use in our component should appear in this array
    directives: [COMMON_DIRECTIVES, ProductComponent, ProductsSpecialComponent]
})
export class ProductsListComponent {
    public products = [
        new Product({
            id: 1,
            name: 'item1',
            price: 20,
            done: false
        }),
        new Product({
            id: 2,
            name: 'item2',
            price: 40,
            done: false
        }),
        new Product({
            id: 3,
            name: 'item3',
            price: 60,
            done: false
        })
    ];

    get specialProducts () {
        return this.products.filter((product) => {
            return product.id === 1;
        });
    }
}