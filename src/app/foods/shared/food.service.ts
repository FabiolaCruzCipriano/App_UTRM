import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodService {


  API_URL: string ='';

constructor(private http:HttpClient){
  this.API_URL = `${environment.API_URL}`
}

public getAll():Observable<Food[]>{
  return this.http.get<Food[]>(this.API_URL+ 'food/all');
}

public addFood(food:Food):Observable<Food>{
  return this.http.post<Food>(this.API_URL+ 'food/save',food);

}

public deleteFood(deleteFood:Food): Observable<unknown>{
  return this.http.delete(this.API_URL+ 'food/delete/'+ deleteFood.id);
}

public getOneFood(id:number):Observable<Food>{
  return this.http.get<Food>(this.API_URL+ 'food/find/'+id);
}

}
//   constructor() {}
//   public getAllFoods(): Food[]{
//     return this.menu;
//   }
//   //Obtener una comida del erreglo
//   public getOne(id:number):Food | undefined{
//     return this.menu.find(item => item.id == id);
//   }
//   //Añadir una nueva comida
//   public addFood(food:Food){
//     this.menu.push(food);
//   }
//   //Actualizar una nueva comida
//   public updateFood(newFood:Food){
//     this.menu.forEach((food,index)=>{
//       if(food.id == newFood.id){
//         this.menu[index] = newFood;
//       }
//     }) 
//   }
//   //Eliminar una comida
//   public deteleFood(deleteFood:Food){
//     this.menu.forEach((food,index)=>{
//       if (food.id == deleteFood.id){
//         this.menu.splice(index,1);
//       }
//     })
//   }

// 
