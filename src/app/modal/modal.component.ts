import {Component, ViewChild, ElementRef, Input, Output, EventEmitter} from "@angular/core";



@Component({
    moduleId:module.id,
    selector:'modal',
    templateUrl:'modal.component.html',
    styleUrls:['modal.component.css']
})

export class ModalComponent{
    @Input() width:string;
    @Input() height:string;
    @Output() afterClose = new EventEmitter();
    @ViewChild('win') win:ElementRef;
    public isVisible: boolean = false;

    openModal(){
        this.isVisible=true;
    }
    closeModal(){
        this.isVisible=false;
        this.afterClose.emit();
    }

}