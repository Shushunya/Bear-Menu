import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsService } from '../shared/services/products.service';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DialogService]
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  loading: boolean = true;
  clonedProducts: { [s: number]: Product } = {};

  types : any;

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

  clear(table: Table) {
    table.clear();
}


  private getProducts() {
    this.products = this.productsService.getProducts();
    this.types = this.productsService.getProductTypes();
    this.loading = false;
  }
}
