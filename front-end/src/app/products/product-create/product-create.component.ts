import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  types: any;


  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    callories: new FormControl('', [Validators.required, Validators.min(0)]),
    cost: new FormControl('', [Validators.required,  Validators.min(0)]),
  });


  constructor(public productsService: ProductsService, public ref: DynamicDialogRef) {

  }
  ngOnInit(): void {
    this.productsService._productTypes.subscribe(res => {
      this.types = res;
      this.productForm.controls['type'].setValue(this.types[0].value);
    });
    this.productForm.valid
  }


  getType(type: any) {
    return this.types.find(x => x.value == type).display_name;
  }
  submit() {
    let product = new Product(this.productForm.value.name, 
                              this.productForm.value.type, 
                              this.productForm.value.callories, 
                              this.productForm.value.cost);

    this.productsService.createProduct(product).subscribe(res => {
      this.ref.close(res);
    })

  }

get  getTypeControll(){
  return this.productForm.controls['type'].value;
}
}

