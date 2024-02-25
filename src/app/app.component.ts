import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutComponent } from "./shared/layout/layout.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, LayoutComponent,RouterOutlet]
})
export class AppComponent {
  title = 'app-ut';
}
