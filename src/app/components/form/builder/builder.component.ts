import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoreService } from 'src/app/services/services.service';
import { AddQuestionComponent } from '../add-question/add-question.component';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {
  data: any
  builderForm!: FormGroup;
  textAreaArray!: FormArray;
  checkBoxArray!: FormArray;
  required! : any
  constructor(private fb: FormBuilder, public modalService: NgbModal, private service: StoreService, private router : Router) { }
  ngOnInit() {
    this.builderForm = new FormGroup({
      textAreaArray: new FormArray([]),
      checkBoxArray: new FormArray([])
    });
    this.service.QuestionData.subscribe((resp) => {
      if (resp) {
        this.data = resp
        this.required = this.data?.required
        this.data?.OptionsArray.map((resp: any) => {
          if (this.data?.QuestionType == 'Textarea') {
            this.addTextAreas(resp?.options)
          }
          else {
            this.addCheckBoxes(resp?.options)
          }
        })
      }
    })
  }
  addTextAreas(textAreaValues = null): void {
    this.textAreaArray = this.builderForm.get('textAreaArray') as FormArray;
    this.textAreaArray.push(this.fb.group({
      textAreaValues: new FormControl(textAreaValues),
      textArea: '',
    }));
  }
  addCheckBoxes(checkBoxValues = null) {
    this.checkBoxArray = this.builderForm.get('checkBoxArray') as FormArray || [];
    this.checkBoxArray.push(this.fb.group({
      checkBoxValues: new FormControl(checkBoxValues),
      checkBox: '',
    }));
  }
  openModal() {
    //ModalComponent is component name where modal is declare
    const modalRef = this.modalService.open(AddQuestionComponent);
    modalRef.result.then((result) => {
    }).catch((error) => {
    });
  }
  clickSubmit() {
    this.router.navigateByUrl('/form/answers');
    this.service.QuestionViewDataSubject.next(this.builderForm.value)

  } 
}
