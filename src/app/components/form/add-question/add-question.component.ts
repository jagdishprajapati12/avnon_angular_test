import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  @ViewChild('content') content: any;
  closeResult: string = '';

  form!: FormGroup;

  constructor(private modalService: NgbModal, public fb:FormBuilder) {}

  options!: FormArray;

  ngOnInit(): void {
    this.form = this.fb.group({
      type: ['Checkbox', Validators.required],
      question: [null, Validators.required],
      required: [false],
      ownAnswer: [false],
      textArea: [null],
      options: this.fb.array([])
    });
    this.handelChangeTypes();
  }

  getDismissReason(reason: any) {
    this.modalService.dismissAll(reason);
  }

  handelChangeTypes() {
    this.options = this.form.get('options') as FormArray;
    this.options.clear();
    if(this.form.value.type == 'Checkbox') {
      this.addOption();
    }
  }

  addOption() {
    const formGroup = this.fb.group({
      option: [null]
    });
    this.options = this.form.get('options') as FormArray;
    this.options.push(formGroup);
  }

  save() {
    this.getDismissReason(this.form);
  }
}
