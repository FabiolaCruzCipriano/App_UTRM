import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatListModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  opened = true;
  public links =[{
    icon:'restaurant_menu',
    label:'Lista de Comida',
    routerLink:'food/food-list'
  },
{
  icon: 'lunch_dining',
      label: 'Crear Nueva Comida',
      routerLink: 'food/form'
    
    
    }]
  public open():void{
  if (this.opened) {
    this.opened = !this.opened;   
  } else
  { this.opened = !this.opened;
  }
}
}