import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductService } from './product.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryService } from './category.service';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryManagerComponent } from './category-manager/category-manager.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, ProductsComponent, ProductAddComponent, ProductDetailComponent, ProductEditComponent, ManagerComponent, HomeComponent, NotFoundComponent, CategoryEditComponent, CategoryAddComponent, CategoryManagerComponent, BlogComponent, ContactComponent, DashboardComponent, LoginComponent],
  bootstrap: [AppComponent],
  providers: [ProductService, CategoryService]

})
export class AppModule { }
