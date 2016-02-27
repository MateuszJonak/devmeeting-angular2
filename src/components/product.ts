import {Component, View} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';

import { Product } from '../entity/product.entity';

@Component({
    selector: 'product'
})
@View({
    templateUrl: 'views/product.html'
})
export class ProductComponent {
}