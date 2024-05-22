import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './main-layout.component.html',
  styles: ``
})
export class MainLayoutComponent {

  protected darkMode: string = '🌕';
  protected lightMode: string = '☀️';

  protected mode: string = this.darkMode;


  protected toggleMode(): void {
    this.mode = this.mode === this.darkMode ? this.lightMode : this.darkMode;
  }
}
