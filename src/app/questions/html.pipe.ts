import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name:'html',
    pure:false
})
export class HtmlPipe implements PipeTransform{
    transform(value:any, args:any[]=[]){
        let dp = new DOMParser().parseFromString(value, 'text/html');
        return dp.documentElement.textContent;
    }
}