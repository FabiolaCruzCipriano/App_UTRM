import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-details-food',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,TitleCasePipe,CurrencyPipe,MatIconModule],
  templateUrl: './details-food.component.html',
  styleUrl: './details-food.component.css'
})
export class DetailsFoodComponent implements OnInit {
  constructor(public foodservice:FoodService){
    
  }
  activedRoute: ActivatedRoute= inject(ActivatedRoute);
  foodId:number=-1
  food?:Food= {
    name:'',
    descripcion:'',
    image:'',
    category:'',
    price:0


  }


ngOnInit():void{
  this.foodId=Number(this.activedRoute.snapshot.params['id']);
  this.food=this.foodservice.getOne(this.foodId);
  console.log(this.food);
}
}
