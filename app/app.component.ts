import {Component} from "angular2/core";
import {ProductListComponent} from "./products/product-list.component";
/**
 * Created by bobak on 2016-07-27.
 */
@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1><pm-products></pm-products></div>`,
    directives: [ProductListComponent]
})
export class AppComponent{
    pageTitle: string = "Acme Product Management";
}