import { Component, OnInit } from '@angular/core';
import {MatFormField, MatInputModule} from '@angular/material/input';
import { CarsService } from '../../services/cars.service'; // adapte le chemin selon ton arborescence
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cars',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatFormField
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit{

  cars: any[] = [];
  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe({
      next: (result) => {
        console.log('✅ Résultat GraphQL :', result);
        this.cars = result.data.vehicles;
      },
      error: (err) => {
        console.error('❌ Erreur GraphQL :', err);
      }
    });
  }
}
