import { Component, View } from 'angular2/core';
import { Control } from 'angular2/common'

import { ProductsListComponent } from "./productsList";
import { Product } from '../models/product.entity';

@Component({
    selector: 'products-site',
})
@View({
    templateUrl: 'views/productsSite.view.html',
    //Any directive we want to use in our component should appear in this array
    directives: [ProductsListComponent]
})
export class ProductsSiteComponent {
    public searchInput = new Control();
    public _products = [
        new Product(require('./products.json')[0]),
        new Product(require('./products.json')[1]),
        new Product(require('./products.json')[2])
    ];

    get products () {
        return this._products.filter((product) => {
            let filterVal:string = this.searchInput.value || '';
            let regexp:any;
            let booleans: any;

            regexp = new RegExp(filterVal, 'ig');
            booleans = {
                name: false,
                tags: false,
                price: false
            };

            booleans.name = product.name.search(regexp) !== -1;
            booleans.tags = product.tags.filter(tag => {
                return tag.search(regexp) !== -1;
            }).length > 0;
            booleans.price = product.price.toString().search(regexp) !== -1;

            return booleans.name || booleans.tags || booleans.price;
        });
    }

    get specialProducts () {
        return this._products.filter((product) => {
            return product.id === 1;
        });
    }
}