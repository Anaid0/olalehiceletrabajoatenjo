import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { RequestProductsComponent } from './pages/request-products/request-products.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UsersComponent } from './pages/users/users.component';
import { MovementsComponent } from './pages/movements/movements.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { RequestListComponent } from './pages/request-list/request-list.component';
import { ProductsComponent } from './pages/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginUserComponent,
    HomeComponent,
    ManageProductsComponent,
    RequestProductsComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UsersComponent,
    MovementsComponent,
    ManageUsersComponent,
    RequestListComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
