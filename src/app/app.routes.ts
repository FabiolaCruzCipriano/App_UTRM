import { Routes } from '@angular/router';
import { FoodComponent } from './foods/food/food.component';

export const routes: Routes = [
    {
        path:'', component:FoodComponent
    },
    {
        path:'food',
        loadChildren:() => import('./foods/foods.routes'),
    }
];
