import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsService } from '../shared/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DialogService]
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  clonedProducts: { [s: number]: Product } = {};

  types = [{ label: 'In Stock', value: 'INSTOCK' },
  { label: 'Low Stock', value: 'LOWSTOCK' },
  { label: 'Out of Stock', value: 'OUTOFSTOCK' }]

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService,
              public productsService: ProductsService) { }

  ngOnInit(): void {
      this.getProducts();
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: Product) {
    delete this.clonedProducts[product.id];

    // TODO: Update product entity
  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }

  createProduct() {
    this.ref = this.dialogService.open(ProductCreateComponent, {
      header: 'Новий продукт',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe(() => {
      this.getProducts();
    });

 
  }

  private getProducts(){
    this.products = this.productsService.getProducts();
  }
}
