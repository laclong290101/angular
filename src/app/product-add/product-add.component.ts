import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products/product';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    product: Product = new Product();
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() { }

    onAddProduct() {
        this.productService.addProduct(this.product).subscribe(data =>
            this.router.navigateByUrl('/manager')

        )
    }
}
