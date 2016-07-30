import {PipeTransform, Pipe} from "angular2/core";
import {IProduct} from "./product";
/**
 * Created by bobak on 2016-07-29.
 */
@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], args: string[]): IProduct[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
