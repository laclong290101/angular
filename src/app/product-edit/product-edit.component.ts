import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products/product';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo() {
    this.route.params.subscribe(param => {
      this.productService.getInfo(param.productID).subscribe(data => {
        this.product = data;
      })
    })

  }
  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(data => {
      this.product = data;
      this.router.navigateByUrl('/manager')
    })
  }
}
