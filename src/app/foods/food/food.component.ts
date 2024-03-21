import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { Food } from "../shared/food.model";
import { CurrencyPipe, TitleCasePipe } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FoodService } from '../shared/food.service';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CurrencyPipe, TitleCasePipe,RouterModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  @Input() food?: Food;

  constructor(public foodService:FoodService){

  }
  public deleteFood(food:Food){
this.foodService.deteleFood(food);
  }
}