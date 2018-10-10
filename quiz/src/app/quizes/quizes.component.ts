import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Quiz } from './quiz.model';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {
  maxScore: number = 100;
  minScore: number = 40;
  user: User;
  quizes: Quiz[];
  currentQuiz: Quiz;
  score: number = 10;
//any:any[];


    
  

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
      error => console.log(error)
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
    this.user = new User();
    this.currentQuiz = new Quiz();
  }

 
}


