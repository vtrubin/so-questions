import {Component, HostListener, ViewChild, ElementRef} from "@angular/core";
import {QuestionsService} from "./questions.service";
import {ModalComponent} from "../modal/modal.component";
import {HtmlPipe} from "./html.pipe";
@Component({
    moduleId:module.id,
    selector:'questions',
    templateUrl:'questions.component.html',
    styleUrls:['questions.component.css'],
    providers:[QuestionsService]
})
export class QuestionsComponent{
    @ViewChild('modal') modal:ModalComponent;
    @ViewChild('questionContent') questionContent:ElementRef;
    @ViewChild('questionBody') questionBody:ElementRef;
    @HostListener('window:scroll',['$event'])
    manageScroll(event:any){
        if (!this.isLoading){
            if(window.innerHeight+window.pageYOffset>=this.questionContent.nativeElement.clientHeight){
                this.isLoading=true;
                this.questionsService.getQuestions(this.currentPage)
                    .subscribe(data=>{
                        this.currentPage++;
                        this.questions=this.questions.concat(data.items);
                        this.isLoading=false;
                    })
            }
        }
    }
    public questions:Array<any>;
    private currentPage:number=1;
    public isLoading:boolean=false;
    public currentQuestion:string='';
    public title:string='';
    public link:string='';
    public modalIsOpen:boolean = false;
    constructor(private questionsService:QuestionsService){}
    
    openModal(id: string){
        this.modalIsOpen=true;
        this.questionsService.getQuestion(id)
            .subscribe(data=>{
                this.title = data.items[0].title;
                this.questionBody.nativeElement.innerHTML=data.items[0].body;
                this.link = data.items[0].link;
                this.modal.openModal();
            });

    }
    afterClose(){
        this.modalIsOpen=false;
    }
    
    ngOnInit(){
        this.questionsService.getQuestions(this.currentPage)
            .subscribe(data=>{
                this.questions=data.items;
            })
    }
}