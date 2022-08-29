import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public QuestionDataSubject = new BehaviorSubject(null);
  public QuestionData = this.QuestionDataSubject
    .asObservable()

  public QuestionViewDataSubject = new BehaviorSubject(null);
  public QuestionViewData = this.QuestionViewDataSubject
    .asObservable() 
}
