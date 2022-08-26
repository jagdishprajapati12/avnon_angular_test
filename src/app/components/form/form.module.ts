import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BuilderComponent } from './builder/builder.component';
import { AnswersComponent } from './answers/answers.component';
import { AddQuestionComponent } from './add-question/add-question.component';


@NgModule({
  declarations: [
    BuilderComponent,
    AnswersComponent,
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
