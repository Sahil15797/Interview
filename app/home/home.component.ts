import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projectTimer : number = 0;
  interval : any;
  startIndex : number = 0;
  stopIndex : number = 0;
  projectForm!: FormGroup;
  projectDetails = [
    {
      projectName: "Microsoft Project",
      projectType: "OnSite",
      clientName: "Microsoft",
      templateName: "FirstTemp",
      timeSpent : 0
    },
    {
      projectName: "Google Project",
      projectType: "OffSite",
      clientName: "Google",
      templateName: "SecondTemp",
      timeSpent : 0
    },
    {
      projectName: "JPMC Project",
      projectType: "OnSite",
      clientName: "JPMC",
      templateName: "ThirdTemp",
      timeSpent : 0
    },
    {
      projectName: "Meta Project",
      projectType: "OnSite",
      clientName: "Meta",
      templateName: "FourthTemp",
      timeSpent : 0
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(""),
      projectType: new FormControl(""),
      clientName: new FormControl(""),
      templateName: new FormControl(""),
      timeSpent: new FormControl(0)
    })
  }

  addProject() {
    this.projectDetails.push(this.projectForm.value);
  }

  startTimer(index : any){
    this.startIndex = index;
    this.interval = setInterval(() => {
      this.projectTimer ++;
    },1000)
  }
  stopTimer(index : any){
    if(this.startIndex == index){
      this.stopIndex = index;
      this.projectDetails[index].timeSpent = this.projectTimer;
      clearInterval(this.interval);
    }
  }
}
