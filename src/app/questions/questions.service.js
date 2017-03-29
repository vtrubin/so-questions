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
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var QuestionsService = (function () {
    function QuestionsService(http) {
        this.http = http;
    }
    QuestionsService.prototype.getQuestions = function (page) {
        var url = "https://api.stackexchange.com/2.2/questions?\n    key=U4DMV*8nvpm3EOpvf69Rxw\n    ((&site=stackoverflow&page=" + page + "&pagesize=40&order=desc&sort=creation&filter=default";
        return this.http
            .get(url)
            .map(function (response) { return response.json(); });
    };
    QuestionsService.prototype.getQuestion = function (id) {
        var url = "https://api.stackexchange.com/2.2/questions/" + id + "\n        ?order=desc&sort=activity&site=stackoverflow&filter=withbody";
        return this.http
            .get(url)
            .map(function (response) { return response.json(); });
    };
    QuestionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionsService);
    return QuestionsService;
}());
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=questions.service.js.map