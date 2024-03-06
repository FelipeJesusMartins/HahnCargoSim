import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { OrderCreateComponent } from './components/order/create/create.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'authentication', component: AuthenticationComponent },
  {
    path: 'order/create',
    component: OrderCreateComponent,
    canActivate: [AuthGuard],
    data: { debug: true },
  },
];
