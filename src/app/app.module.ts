import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './core/login/login.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LocalstorageService } from './core/localstorage/localstorage.service';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    AdminComponent,
    FormComponent,
    SharedComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [LocalstorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
