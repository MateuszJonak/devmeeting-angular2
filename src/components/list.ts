import {Component, View} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

import { Product } from '../entity/product.entity';

@Component({
    selector: 'list'
})
@View({
    templateUrl: 'views/productsList.html',
    //Any directive we want to use in our component should appear in this array
    directives: [COMMON_DIRECTIVES]
})
export class ListComponent {
    public products = [
        new Product({name: 'item1', price: 20}),
        new Product({name: 'item2', price: 40}),
        new Product({name: 'item3', price: 60})
    ];

    get specialProducts () {
        return this.products.filter((product) => {
            return product.name === 'item1';
        });
    }
}