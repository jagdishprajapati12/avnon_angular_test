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

  items = [
    {
      type: 'TextArea',
      question: 'Please tell us about yourself',
      context: `I'm a senior developer with 12 years of experience
      building large scale enterprise applications. I'm
      fanatical about performance and have excellent
      attention to detail`
    },
    {
      type: 'CheckBox',
      question: 'Please tell us about yourself',
      option: [
        'Typescript',
        'C#',
        'Other–I also know Dart'
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
