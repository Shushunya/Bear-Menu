import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsService } from '../shared/services/products.service';
import { Table } from 'primeng/table';
import { forkJoin } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [DialogService,ConfirmationService, MessageService]
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  loading: boolean = true;
  clonedProducts: { [s: number]: Product } = {};
  types: any
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService,
    public productsService: ProductsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: Product) {
    delete this.clonedProducts[product.id];

    this.productsService.updateProduct(product).subscribe(()=>{
      this.getProducts();
    })

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
      this.messageService.add({ severity: 'success', summary: 'Перемога', detail: 'Створено' });
      this.getProducts();
    });
  }

  clear(table: Table) {
    table.clear();
  }

  getType(type: any) {
    return this.types.find(x => x.value == type).display_name;
  }

  delete(product){
    
    this.confirmationService.confirm({
      message: `ПРЯМ ТОЧНО-ТОЧНО?!`,
      header: 'ТИ ВПЕВНЕНИЙ/НА, ЩО ХОЧЕШ ВИДАЛИТИ ${product.name.toUpperCase()}???',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.productsService.deleteProduct(product).subscribe(res=>{
          this.getProducts();
          this.messageService.add({ severity: 'success', summary: 'Перемога', detail: 'Видалив успішно бля' });
        });
      },
      reject: (type) => {
        this.messageService.add({ severity: 'warn', summary: 'Шось нє', detail: 'Передумав :с' });
      }
  });


  
  }

 

  private getProducts() {

    let getProducts = this.productsService.getProducts();
    let getProductTypes = this.productsService.getProductTypes();

    forkJoin([getProducts, getProductTypes]).subscribe(([products, productTypes]) => {
      this.products = products;
      this.types = productTypes.actions.POST.type.choices;
      this.productsService._productTypes.next(this.types)
      this.loading = false;
    })


  }
}
