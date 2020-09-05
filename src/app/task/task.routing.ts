import { Routes } from '@angular/router';
import {ListTaskComponent } from './list-task/list-task.component';
import {TaskDetailComponent } from './task-detail/task-detail.component';
export const TaskRoutes: Routes = [
    {
        path: 'list-task',
        component: ListTaskComponent
    },
    {
        path: 'task-detail',
        component: TaskDetailComponent
    },
];
