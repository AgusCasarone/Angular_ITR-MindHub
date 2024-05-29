import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navButtons } from '../../../assets/navButtons';
import { NavButton } from '../../interfaces/nav-button';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './main-layout.component.html',
  styles: ``
})
export class MainLayoutComponent implements OnInit {

  protected darkMode: string = '🌕';
  protected lightMode: string = '☀️';

  protected mode: string = this.darkMode;

  navButtons: NavButton[] = navButtons.sort((a, b) => a.order - b.order);

  ngOnInit(): void {
  }

  protected toggleMode(): void {
    this.mode = this.mode === this.darkMode ? this.lightMode : this.darkMode;
  }
}
