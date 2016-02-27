import {Component, View} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

import { ProductComponent } from "./product";
import { ProductInterface } from '../entity/product.interface';

@Component({
    selector: 'products-special',
    //To receive data we need to mark property as an `input`
    inputs: ['productsSpecial']
})
@View({
    templateUrl: 'views/productsSpecial.html',
    //Any directive we want to use in our component should appear in this array
    directives: [COMMON_DIRECTIVES, ProductComponent]
})
export class ProductsSpecialComponent {
    // We can also use @Input() annotation instead of config in @Component()
    public productsSpecial: Array<ProductInterface>;
}