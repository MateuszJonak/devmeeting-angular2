import { Component, View } from 'angular2/core';
import { Control } from 'angular2/common'

import { ProductsListComponent } from "./productsList";
import { ProductInterface } from "../models/product.interface";
import { Product } from '../models/product.entity';
import { SortBtnComponent } from './sortBtn';

@Component({
    selector: 'products-site',
})
@View({
    templateUrl: 'views/productsSite.view.html',
    //Any directive we want to use in our component should appear in this array
    directives: [ProductsListComponent, SortBtnComponent]
})
export class ProductsSiteComponent {
    public searchInput = new Control();

    public sortMode = {
        price: false,
        name: false
    };
    public sortPriceMode: number;
    public sortNameMode: number;

    public _products = [
        new Product(require('./products.json')[0]),
        new Product(require('./products.json')[1]),
        new Product(require('./products.json')[2])
    ];

    get products () {
        let tempProduct: Array<ProductInterface>;
        console.log(this._products);
        if (this.sortMode.price) {
            tempProduct = this._products.sort((a, b) => {
                if (this.sortPriceMode < 0) {
                    return a.price - b.price;
                } else if (this.sortPriceMode > 0) {
                    return b.price - a.price;
                }
                return 0;
            });
        } else if (this.sortMode.name) {
            tempProduct = this._products.sort((a, b) => {
                if (this.sortNameMode < 0) {
                    if(a.name < b.name) return -1;
                    if(a.name > b.name) return 1;
                    return 0;
                } else if (this.sortNameMode > 0) {
                    if(a.name < b.name) return 1;
                    if(a.name > b.name) return -1;
                    return 0;
                }

                return 0;
            });
        } else {
            tempProduct = this._products;
        }

        return tempProduct.filter((product) => {
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

    emitSortPrice (sortPriceMode: number) {
        this.sortMode.price = true;
        this.sortMode.name = false;
        this.sortPriceMode = sortPriceMode;
    }

    emitSortName (sortNameMode: number) {
        this.sortMode.price = false;
        this.sortMode.name = true;
        this.sortNameMode = sortNameMode;
    }
}