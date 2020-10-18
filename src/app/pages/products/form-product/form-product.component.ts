import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }


  saveProduct(event: Event) {
    event.preventDefault();
    if (this.myForm.valid) {
      const product: Product = this.myForm.value;
      this.productsService.createProduct(product)
        .subscribe((newProduct) => {
          // this.router.navigate(['./admin/products']);
          console.log(newProduct, ' INGRESADO EN LA BD');
        });
    }
    this.myForm.reset();
  }

  private buildForm() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['',],
      priceIn: [, [Validators.required]],
      priceOut: [, [Validators.required]],
      inventory: [, [Validators.required]],
    });
  }
}
