import { Component, OnInit } from '@angular/core';
import { SubTaskService } from 'src/app/services/subtask.service';
import { Subtask } from 'src/app/models/subtask';

@Component({
  selector: 'app-employee-updtae',
  templateUrl: './employee-updtae.component.html',
  styleUrls: ['./employee-updtae.component.css']
})
export class EmployeeUpdtaeComponent implements OnInit {
  //tasks = taskDescription;
  id: number;
  id1: number;
  subtasks: Subtask[];
  subtaskObj: Subtask;

  //For the comments
 
  showForm = "none";
  //updateProgress = 0;


  barValue = "block";
  textValue = "none";
  constructor(private subtaskService: SubTaskService) {

  }

  ngOnInit() {
    this.loading();
  }
  private loading() {
    this.subtaskService.findAll().subscribe(data => {
      this.subtasks = data;
      this.id1 = 0;


    });
  }
  onSubmit(progress: number) {
    //this.id = this.subtaskObj.subTaskId;
    //console.log(this.id);
  }

  update(id1) {

    this.barValue = this.barValue == "block" ? "none" : "block";
    this.textValue = this.textValue == "none" ? "block" : "none";

    document.getElementById("progress-bar").style.display = this.barValue;
    document.getElementById("progress-text").style.display = this.textValue;
    
    document.getElementById("progress-comment").style.display = this.textValue;

    console.log(this.subtasks[id1].progressPercentage)
    /*this.subtaskObj.subTaskId= this.subtasks[id1].subTaskId;
    this.subtaskObj.subTaskTitle= this.subtasks[id1].subTaskTitle;
    this.subtaskObj.dueDate= this.subtasks[id1].dueDate;
    this.subtaskObj.progressPercentage= this.subtasks[id1].progressPercentage;
    this.subtaskObj.startDate= this.subtasks[id1].startDate;
    this.subtaskObj.subTaskDescription= this.subtasks[id1].subTaskDescription;*/

    this.subtaskService.updateProgress(this.subtasks[id1].subTaskId, this.subtasks[id1].progressPercentage, this.subtasks[id1].comment)
      .subscribe(data => {
        console.log(data);

      });



    //this.subtasks[id1].progressPercentage=newProgress;
    //console.log(id1);
    //this.subtasks=subtasks;
    //console.log(subtasks.progressPercentage);
  }
  submitComment(){
    console.log("submitted")
  }

  updatedProgress(subtaskObj: {
    subTaskId: number,
    subTaskTitle: string,
    subTaskDescription: string,
    startDate: Date,
    dueDate: Date,
    progressPercentage: number
  }) {
    document.getElementById("progress-bar").style.display = "block";
    document.getElementById("progress-text").style.display = "none";
    //console.log(subtaskObj.progressPercentage);
  }




}

