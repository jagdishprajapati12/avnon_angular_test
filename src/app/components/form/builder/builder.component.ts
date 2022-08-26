import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddQuestionComponent } from '../add-question/add-question.component';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {

  formData: any = [];
  form!: FormGroup; // created subject form
  questions!: FormArray;
  data : any
  constructor(private fb: FormBuilder, public modalService: NgbModal ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      questions: this.fb.array([])
    })
  }
  openModal() {
    //ModalComponent is component name where modal is declare
    const modalRef = this.modalService.open(AddQuestionComponent);
    modalRef.result.then((result) => {
    }).catch((error) => {
      this.formData.push(error.value)
      this.questions = this.form.get('questions') as FormArray;
      // error.reset();
      this.questions.push(error);
    });
  }

  public currentType (formGroup: any): string {
    return formGroup.value.type;
  }

  public questionName(formGroup: any): string {
    return formGroup.value.question;
  }

  public required(formGroup: any): string {
    return formGroup.value.required;
  }

  public options(formGroup: any): string {
    return formGroup.controls.options.controls;
  }

  public optionsArray(formGroup: any, i: number): string {
    return formGroup.at(i);
  }

  public optionIndex(i: number, index: number): string {
    return `${i}+${index}`;
  }

  public languageName(option: any, i: any, index: any): string {
    option.reset();
    return this.formData[i]?.options[index]?.option;
  }

  opeion(option: any) {
    console.log(option)
  }

  save() {
    console.log(this.form.value);
  }
}
