import { Question } from './question';

export class Quiz{

  constructor(private ques:Question[],public score:number,public index:number){

  }

  getIndex(){
    return this.ques[this.index];
  }

  isEnded(){
    if(this.ques.length == this.index){
      return true;
    }else{
      return false;
    }
  }

  iterate(){
    this.index++;
  }

  scoreQuiz(){
    this.score = this.score+ this.ques[this.index].marks;
  }

}
