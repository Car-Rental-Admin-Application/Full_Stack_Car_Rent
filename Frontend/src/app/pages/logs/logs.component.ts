import { Component } from '@angular/core';
import {MatFormField, MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatFabButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-logs',
  imports: [
    MatFormField,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFabButton
  ],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  displayedColumns: string[] = ['name', 'date', 'time', 'price', 'image', 'status', 'action'];
  dataSource = [
    {
      name: 'Product 1',
      date: '2025-05-26',
      time: '10:00 AM',
      price: '$100',
      image: 'assets/logo.png',
      status: 'Available'
    },
    // Ajoutez plus de données selon besoin
  ];

}
