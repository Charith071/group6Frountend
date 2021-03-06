import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz';
import { Question } from './question';
import { HadsQuestion } from './hadsquestion';
import { HadsQuiz } from './hadsquiz';

@Component({
  selector: 'app-dhome',
  templateUrl: './dhome.component.html',
  styleUrls: ['./dhome.component.css']
})
export class DhomeComponent implements OnInit {

  private hrquestions = [
    new Question("Death of close family member",100,"1"),
    new Question("Death of close friend",73,"2"),
    new Question("Divorce of parents",65,"3"),
    new Question("Jail term",63,"4"),
    new Question("Major personal injury or illness",63,"5"),
    new Question("Marriage",58,"6"),
    new Question("Getting fired from a job",50,"7"),
    new Question("Failing an important course",47,"8"),
    new Question("Change in the health of a familiy member",45,"9"),
    new Question("Pregnancy",45,"10"),
    new Question("Sex problems",44,"11"),
    new Question("Serious arguments with a close friend",40,"12"),
    new Question("Change in the financial status",39,"13"),
    new Question("Change in the academic major",39,"14"),
    new Question("Trouble with parents",39,"15"),
    new Question("New girlfriend or boyfriend",37,"16"),
    new Question("Increase in workload at school",37,"17"),
    new Question("Outstanding personal achievement",36,"18"),
    new Question("First quarter/semester in college",36,"19"),
    new Question("Change in living conditions",31,"20"),
    new Question("Serious argument with an instructor",30,"21"),
    new Question("Getting lower grades then expected",29,"22"),
    new Question("Change in sleeping habbits",29,"23"),
    new Question("Change in social activities",29,"24"),
    new Question("Change in eating habbits",28,"25"),
    new Question("Chronic car trouble",26,"26"),
    new Question("Change in number of family get togethers",26,"27"),
    new Question("Too many missed classes",25,"28"),
    new Question("Changing colleges",24,"29"),
    new Question("Dropping more than one class",23,"30"),
    new Question("Minor traffic violations",20,"31")
  ];

  private pssquestions=[
    new Question("In the last month how often have you been upset because of something that happened unexpectedly?",23,"1"),
    new Question("In the last month how often have you felt that you were unable to control important things in your life?",12,"2"),
    new Question("In the last month how often have you felt nervous and 'stressed'?",3,"3"),
    new Question("In the last month how often have you felt confident about your ability to handle your personal problems?",4,"4"),
    new Question("In the last month how often have you felt that things were going your way?",23,"5"),
    new Question("In the last month how often have you found that you could not cope with all the things that you had to do?",12,"6"),
    new Question("In the last month how often have you been able to control irritations in your life?",3,"7"),
    new Question("In the last month how often have you felt that you were on top of things?",4,"8"),
    new Question("In the last month how often have you been angered because of things that were outside of your control?",3,"9"),
    new Question("In the last month how often have you felt difficulties were piling up so high that you could not overcome them?",4,"10")

  ];

  private hdssquestions=[
    new HadsQuestion("In the last week how often you felt tense or 'wound up'?","1","Most of the time","A lot of times","From time to time","Not at all"),
    new HadsQuestion("Do you enjoy the things you used to enjoy?","2","Definitely as much","not quite as much","Only a little","Not at all"),
    new HadsQuestion("How often do you get frightened feeling as if something awful is about to happen?","3","Very definitely but quite badly","Yes but not too badly","A littel but it doesn't worry me","Not at all"),
    new HadsQuestion("How often you can laugh and see the funny side of things?","4","As much as I always could","Not quite so much now","Difinitely not so much now","Not at all"),
    new HadsQuestion("How often worrying thoughts go through your mind?","5","A great deal of time","A lot of time","From time to time but not too often","Only occasionally"),
    new HadsQuestion("How often do you feel cheerful?","6","Not at all","Not often","Sometimes","Most of the time"),
    new HadsQuestion("Can you sit at ease and feel relxed?","7","Difinitely","Usually","Not Often","Not at all"),
    new HadsQuestion("How often you feel as if you are slowed down?","8","Nearly all of the time","Very often","Sometimes","Not at all"),
    new HadsQuestion("How often you get sort of frightened feeling like 'butterflies' in the stomach?","9","Not at all","Occasionally","Quite Often","Very Often"),
    new HadsQuestion("Do you lost interest in my appearance?","10","Difinitely","I don't take as much care as I should","I may not take quite as much care","I take just as much care as ever"),
    new HadsQuestion("How much do you feel restless as you have to be on the move?","11","Very much indeed","Quite a lot","Not very much","Not at all"),
    new HadsQuestion("Do you look forward with enjoyment to things?","12","As much as I ever did","Rather less than I used to","Definitely lass than I used to","Hardly at all"),
    new HadsQuestion("How often you get sudden feelings of panic?","13","Very often indeed","Quite Often","Not very often","NOt at all"),
    new HadsQuestion("How often you can enjoy a good book or radio/TV programme?","14","Often","Sometimes","Not often","Very seldom"),
  ];

  private hrquiz = new Quiz(this.hrquestions,0,0);
  private pssquiz = new Quiz(this.pssquestions,0,0);
  private hdssquiz = new HadsQuiz(this.hdssquestions,0,0);

  constructor() { }

  ngOnInit() {
// Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click(); 

  }

  openCity(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}


}
