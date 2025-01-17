import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIcon, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title: string = '';
  isDarkTheme: boolean;
  themeService: ThemeService;

  constructor(private thService: ThemeService) {
    this.isDarkTheme = thService.isDarkMode();
    this.themeService = thService;
  }

  ngOnInit(): void {
    // Assinar eventos de mudança de tema (opcional)
  }
}
