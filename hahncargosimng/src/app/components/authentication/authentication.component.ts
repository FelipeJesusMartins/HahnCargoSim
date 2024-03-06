import { Component, Input, NgModule, OnInit, input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    LoadingComponent,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
    MatDividerModule,
    CommonModule,
  ],
  providers: [AuthenticationService],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent {
  @Input() User: string = '';
  @Input() Password: string = '';

  ShowButton: boolean = true;

  constructor(private authService: AuthenticationService) {}

  async loginClick() {
    this.ShowButton = false;

    await this.authService.login(this.User, this.Password);

    this.ShowButton = true;
  }
}
