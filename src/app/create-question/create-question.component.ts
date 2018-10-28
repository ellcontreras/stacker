import { Component, OnInit } from '@angular/core';

import { Question } from '../models/Question';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  question = new Question('', '', '');

  constructor() { }

  ngOnInit() {
  }

  handleClickButton() {
    alert(`Hello ${this.question.title}`);

    this.clearInputs();
  }

  clearInputs() {
    this.question.title = ' ';
    this.question.description = ' ';
  }

}
