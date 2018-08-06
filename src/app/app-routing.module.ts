import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'core/login', component: LoginComponent},
  {path: 'core/registration', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
