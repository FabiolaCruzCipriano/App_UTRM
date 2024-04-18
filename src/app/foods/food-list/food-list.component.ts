import { Component, OnInit } from '@angular/core';
import { FoodService } from '../shared/food.service';
import { Food } from '../shared/food.model';
import { FoodComponent } from '../food/food.component';
@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent implements OnInit {
  data:Food[]=[];
  constructor(public serviceFood:FoodService){

}
  ngOnInit(): void {
    this.serviceFood.getAll().subscribe({
     next:(value) =>(this.data = value),
     error:(e) => console.error(e),
     complete:() => console.info('complete'), 
    })
  // this.data= this.serviceFood.getAllFoods();
  console.log(this.data);
  }
}
