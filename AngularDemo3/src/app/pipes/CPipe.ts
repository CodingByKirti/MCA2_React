import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"change"
})
export class CPipe implements PipeTransform{
    transform(data){
       return  data.substr(0,4)
    }
}