import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TASK_DATA } from '../../task.data';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskFormComponent implements OnInit {

  taskName = '';
  effort = 0;
  status: string | undefined = 'TODO';

  editId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.editId = Number(id);

      const task = TASK_DATA.find(t => t.id === this.editId);

      if (task) {

        this.taskName = task.task;
        this.effort = task.effort;
        this.status = task.status;

      }

    }

  }

  calculatePriority(): string {

    if (this.effort < 34) return "LOW";
    else if (this.effort <= 64) return "MEDIUM";
    else return "HIGH";

  }

  submitTask() {

    const priority = this.calculatePriority();

    const task = {
      id: this.editId,
      task: this.taskName,
      effort: this.effort,
      priority: priority,
      status: this.status
    };

    console.log("Task Saved:", task);

    alert("Task saved (frontend only)");

  }

}