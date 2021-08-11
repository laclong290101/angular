import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css']
})
export class CategoryManagerComponent implements OnInit {
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
  removeCategory(id: number) {
    this.categoryService.removeCategory(id).subscribe(response => {
      this.categories = this.categories.filter(category => category.id != response.id);
    })
  }
}
