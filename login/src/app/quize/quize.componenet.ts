import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User11 } from  './user11.model';
import { Quiz } from './quiz.model';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
 // styleUrls: ['./quizes.component.css']
})
export class QuizeComponent implements OnInit {
  maxScore: number = 100;
  minScore: number = 40;
  user: User11;
  quizes: Quiz[];
  currentQuiz: Quiz;
  score: number = 10;

  constructor(private http: Http) {
    this.setDefault();
  }

  ngOnInit() {
    this.getQuisez();
  }

  private getQuisez() {
    this.http.get('assets/data/mock.data.json').subscribe(
      res => {
        this.quizes = res.json();
        this.getQuestion();
      },
      error => console.log(error),
      
    );
  }

  getQuestion(direction?: string): void {
    if (direction == 'next') this.user.count++;
    if (direction == 'prev') this.user.count--;

    this.currentQuiz = this.quizes[this.user.count];
  }

  getGrade() {
    this.checkQuiz();
    this.user.done = 1;
  }

  checkQuiz() {
    this.quizes.map(quiz => quiz.selected == quiz.answer ? this.user.totalScore += this.score : this.user.totalScore);
  }

  repeatQuiz() {
    this.setDefault();
    this.getQuisez();
  }

  private setDefault() {
    this.quizes = [];
    this.user = new User11();
    this.currentQuiz = new Quiz();
  }

}
