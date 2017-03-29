import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService{

    constructor(private http:Http){

    }

    getQuestions(page:any){
        let url:string=`https://api.stackexchange.com/2.2/questions?
    key=U4DMV*8nvpm3EOpvf69Rxw
    ((&site=stackoverflow&page=${page}&pagesize=40&order=desc&sort=creation&filter=default`;
        return this.http
            .get(url)
            .map(response=> response.json());
    }
    getQuestion(id:string){
        let url:string= `https://api.stackexchange.com/2.2/questions/${id}
        ?order=desc&sort=activity&site=stackoverflow&filter=withbody`;
        return this.http
            .get(url)
            .map(response=>response.json());
    }
}