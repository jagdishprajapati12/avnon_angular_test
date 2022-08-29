import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StoreService } from 'src/app/services/services.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  viewCheckBoxData: any
  viewTextBoxData: any
  constructor(private service: StoreService) { }
  ngOnInit(): void {
    this.service.QuestionViewData.subscribe((resp: any) => {
      this.viewCheckBoxData = resp?.checkBoxArray
      this.viewTextBoxData = resp?.textAreaArray
    })
  }
}
