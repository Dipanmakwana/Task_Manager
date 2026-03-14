import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Task } from '../../models/task.model';
import { TASK_DATA } from '../../task.data';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {

    console.log("Loading tasks from mock data");

    this.tasks = TASK_DATA;
    console.log(this.tasks);
    
  }

}