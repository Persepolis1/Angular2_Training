import {Component} from "angular2/core";
/**
 * Created by bobak on 2016-07-27.
 */
@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1><div>My First Component</div></div>`
})
export class AppComponent{
    pageTitle: string = "Acme Product Management";
}