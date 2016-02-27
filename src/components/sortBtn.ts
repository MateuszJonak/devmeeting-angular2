import {Component, View, EventEmitter} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import { SortFactory } from '../models/sort.factory';

@Component({
    selector: 'sort-btn',
    //To create own event we need to mark it as `output`, @Output decorator is also available
    outputs: ['sort'],
})
@View({
    templateUrl: 'views/sortBtn.html',
    //Any directive we want to use in our component should appear in this array
    directives: [COMMON_DIRECTIVES]
})
export class SortBtnComponent {
    //This property needs to be EventEmitter instance
    public sort = new EventEmitter();
    public sortFactory = new SortFactory();

    public onClickSort () {
        this.sort.emit(this.sortFactory.next);
    }

    constructor () {
        this.sort.emit(this.sortFactory.current);
    }
}