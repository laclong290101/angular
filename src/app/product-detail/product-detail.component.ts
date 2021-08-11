import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products/product';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product: Product;
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,

    ) { }

    ngOnInit(

    ) {
        this.getInfo();

    }
    getInfo() {
        this.route.params.subscribe(param => {
            this.productService.getInfo(param.productID).subscribe(data => {
                this.product = data;
            })
        })
    }
}
