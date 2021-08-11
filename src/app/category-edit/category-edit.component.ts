import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo
  }
  getInfo() {
    this.route.params.subscribe(param => {
      this.categoryService.getInfo(param.categoryID).subscribe(data => {
        this.category = data;
      })
    })

  }
  updateCategory() {
    this.categoryService.updateCategory(this.category).subscribe(data => {
      this.category = data;
      this.router.navigateByUrl('/product')
    })
  }
}
