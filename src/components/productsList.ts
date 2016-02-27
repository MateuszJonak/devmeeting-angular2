import {Component, View} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

import { ProductComponent } from "./product";
import { ProductInterface } from '../models/product.interface';

@Component({
    selector: 'products-list',
    //To receive data we need to mark property as an `input`
    inputs: ['products']
})
@View({
    templateUrl: 'views/productsList.html',
    //Any directive we want to use in our component should appear in this array
    directives: [COMMON_DIRECTIVES, ProductComponent]
})
export class ProductsListComponent {
    // We can also use @Input() annotation instead of config in @Component()
    public products: Array<ProductInterface>;
}