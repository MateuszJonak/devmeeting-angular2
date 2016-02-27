import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {TestComponent} from './components/test';
import {ProductsSiteComponent} from './components/productsSite';

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
    directives: [RouterOutlet]
})
@RouteConfig([
    { path: '/', component: TestComponent },
    { path: '/list', component: ProductsSiteComponent }
])
export class App {}