import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  date1 = new Date();
  title = this.date1.getFullYear() + '年' + (this.date1.getMonth()+1) + '月' 
            + this.date1.getDate() + '日' + 'のタスク';   
  tasks: { name: string }[] = [];
  completedtasks: { name:string }[] = [];

  ionViewWillEnter() {
    if ('tasks' in localStorage || 'completedtasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
      this.completedtasks = JSON.parse(localStorage.completedtasks);
    }
  }
  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }
  async deleteAllTask(){
    this.tasks.splice(0);
    localStorage.tasks = JSON.stringify(this.tasks);

    this.completedtasks.splice(0);
    localStorage.completedtasks = JSON.stringify(this.completedtasks);
  }

  async changeTask(index: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'タスクの変更',
      buttons: [
        {
          text: '削除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.tasks.splice(index,1);
            localStorage.tasks = JSON.stringify(this.tasks);
          }
        }, {
          text: '変更',
          icon: 'create',
          handler: () => {
            this._renameTask(index);
          }
        }, {
          text: '閉じる',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    })
    actionSheet.present();
  }

  async _renameTask(index: number){
    const prompt = await this.alertController.create({
      header:'変更後のタスク',
      inputs:[
        {
          name:'task',
          placeholder:'タスク',
          value: this.tasks[index].name
        },
      ],
      buttons: [
        {
          text: '閉じる',
        },
        {
          text: '保存',
          handler: data => {
            this.tasks[index] = { name: data.task };
            localStorage.tasks = JSON.stringify(this.tasks);
          }
        }
      ]
    });
    prompt.present();
  }


}
