import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  products: Product[]
  constructor(
    private productService: ProductService,

  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
  removeProduct(id: number) {
    this.productService.removeProduct(id).subscribe(response => {
      this.products = this.products.filter(product => product.id != response.id);
    })
  }
}
