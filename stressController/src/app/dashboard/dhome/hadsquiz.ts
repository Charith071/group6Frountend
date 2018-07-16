import { HadsQuestion } from "./hadsquestion";

export class HadsQuiz{
    constructor(private ques:HadsQuestion[],public score:number,public index:number){

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
  
    /*scoreQuiz(){
      this.score = this.score+ this.ques[this.index].marks;
    }*/
}