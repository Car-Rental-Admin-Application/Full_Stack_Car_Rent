import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {CarsComponent} from './pages/cars/cars.component';
import {LogsComponent} from './pages/logs/logs.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'',
    component:HomeComponent,
    children: [
      {
        path:'cars',
        component:CarsComponent,
      },
      {
        path:'logs',
        component:LogsComponent,
      },
      {
        path:'dashboard',
        component:DashboardComponent,
      },
    ]
  }
];
