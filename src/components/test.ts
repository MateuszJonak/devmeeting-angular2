import {Component} from 'angular2/core';

@Component({
    selector: 'test',
    template: 'Hello from component: {{ test }}',
    styles: [require('./test.styl')]
})
export class TestComponent {
    public test: string = 'test app';
    constructor() {}
}
