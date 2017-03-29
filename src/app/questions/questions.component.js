"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var questions_service_1 = require("./questions.service");
var modal_component_1 = require("../modal/modal.component");
var QuestionsComponent = (function () {
    function QuestionsComponent(questionsService) {
        this.questionsService = questionsService;
        this.currentPage = 1;
        this.isLoading = false;
        this.currentQuestion = '';
        this.title = '';
        this.link = '';
        this.modalIsOpen = false;
    }
    QuestionsComponent.prototype.manageScroll = function (event) {
        var _this = this;
        if (!this.isLoading) {
            if (window.innerHeight + window.pageYOffset >= this.questionContent.nativeElement.clientHeight) {
                this.isLoading = true;
                this.questionsService.getQuestions(this.currentPage)
                    .subscribe(function (data) {
                    _this.currentPage++;
                    _this.questions = _this.questions.concat(data.items);
                    _this.isLoading = false;
                });
            }
        }
    };
    QuestionsComponent.prototype.openModal = function (id) {
        var _this = this;
        this.modalIsOpen = true;
        this.questionsService.getQuestion(id)
            .subscribe(function (data) {
            _this.title = data.items[0].title;
            _this.questionBody.nativeElement.innerHTML = data.items[0].body;
            _this.link = data.items[0].link;
            _this.modal.openModal();
        });
    };
    QuestionsComponent.prototype.afterClose = function () {
        this.modalIsOpen = false;
    };
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionsService.getQuestions(this.currentPage)
            .subscribe(function (data) {
            _this.questions = data.items;
        });
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', modal_component_1.ModalComponent)
    ], QuestionsComponent.prototype, "modal", void 0);
    __decorate([
        core_1.ViewChild('questionContent'), 
        __metadata('design:type', core_1.ElementRef)
    ], QuestionsComponent.prototype, "questionContent", void 0);
    __decorate([
        core_1.ViewChild('questionBody'), 
        __metadata('design:type', core_1.ElementRef)
    ], QuestionsComponent.prototype, "questionBody", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], QuestionsComponent.prototype, "manageScroll", null);
    QuestionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'questions',
            templateUrl: 'questions.component.html',
            styleUrls: ['questions.component.css'],
            providers: [questions_service_1.QuestionsService]
        }), 
        __metadata('design:paramtypes', [questions_service_1.QuestionsService])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;
//# sourceMappingURL=questions.component.js.map