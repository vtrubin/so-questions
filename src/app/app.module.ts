import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {QuestionsComponent} from "./questions/questions.component";
import {Http, HttpModule} from "@angular/http";
import {ModalComponent} from "./modal/modal.component";
import {HtmlPipe} from "./questions/html.pipe";

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent, QuestionsComponent, ModalComponent, HtmlPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
