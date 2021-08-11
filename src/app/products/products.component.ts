import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: Category[];
  products: Product[];
  data: Product;
  myClass = 'table-bordered';
  constructor(private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  removeProduct(id: number) {
    this.productService.removeProduct(id).subscribe(response => {
      this.products = this.products.filter(product => product.id != response.id);
    })
  }

}
