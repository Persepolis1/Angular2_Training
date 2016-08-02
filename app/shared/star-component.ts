import {Component, OnChanges, Input, Output, EventEmitter} from "angular2/core";
/**
 * Created by bobak on 2016-08-01.
 */
@Component({
    selector:'air-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating : number;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges() : void {
        this.starWidth = this.rating * 86/5;
    }
    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}