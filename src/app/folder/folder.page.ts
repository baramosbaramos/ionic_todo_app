import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string;
  date1 = new Date();
  title = this.date1.getFullYear() + '年' + (this.date1.getMonth()+1) + '月' 
            + this.date1.getDate() + '日' + 'のタスク';   
  
  task: string;
  tasks: {name:string}[] = [];
  completedtasks: {name:string}[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ionViewWillEnter(){
    if('tasks' in localStorage){
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }
  
  addTask(){
    this.tasks.push({
      name: this.task
    });
    localStorage.tasks = JSON.stringify(this.tasks);
    this.task = '';
  }

  completeTask(index:number){

    this.completedtasks.push({
      name: this.tasks[index].name
    });
    localStorage.completedtasks = JSON.stringify(this.completedtasks);

    this.tasks.splice(index,1);
    localStorage.tasks = JSON.stringify(this.tasks);
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
