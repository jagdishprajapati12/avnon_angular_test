import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  @ViewChild('content') content: any;
  closeResult: string = '';

  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
