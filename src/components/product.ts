import {Component, View} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

import { ProductInterface } from '../models/product.interface';

@Component({
    selector: 'product',
    //To receive data we need to mark property as an `input`
    inputs: ['item'],
})
@View({
    templateUrl: 'views/product.html'
})
export class ProductComponent {
    // We can also use @Input() annotation instead of config in @Component()
    public item: ProductInterface;
}