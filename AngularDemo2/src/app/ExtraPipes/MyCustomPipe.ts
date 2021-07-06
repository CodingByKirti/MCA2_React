import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name : 'ellipses'
})
export class MyCustomPipe implements PipeTransform{
    transform(data:any, lim){

        if(data.length>lim)
        return data.substr(0,lim)+" ...";
        else
        return data;
    }
}