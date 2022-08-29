import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  questionsForm!: FormGroup;
  OptionsArray!: FormArray;
  constructor(private modalService: NgbModal, public fb: FormBuilder, private service: StoreService) {
  }
  ngOnInit(): void {
    this.questionsForm = new FormGroup({
      QuestionType: new FormControl(),
      QuestionName: new FormControl(),
      ownAnswer : new FormControl(),
      required : new FormControl(),
      OptionsArray: new FormArray([])
    });
    this.questionsForm.get('QuestionType')?.patchValue('Checkbox')
    this.addNewQOption()
  }
  createQOption(): FormGroup {
    return this.fb.group({
      options: '',
    });
  }
  addNewQOption(): void {
    this.OptionsArray = this.questionsForm.get('OptionsArray') as FormArray;
    this.OptionsArray.push(this.createQOption());
  }
  onChangeQType(event: any) {
    console.log("event", event.target.value);
  }
  onSave() {
    this.modalService.dismissAll();
    this.service.QuestionDataSubject.next(this.questionsForm.value)
  }
  // for questions list
  get q() {
    return this.OptionsArray as FormArray;
  }
}
