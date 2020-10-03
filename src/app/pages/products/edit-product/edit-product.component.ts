import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  
  myForm: FormGroup;
  id: number;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.fetchProduct();
  }

  buildForm() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['',],
      priceIn: [0, [Validators.required]],
      priceOut: [0, [Validators.required]],
      inventory: [0, [Validators.required]],
    });
  }

  fetchProduct() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
        .subscribe(product => {
          this.myForm.patchValue(product);
        });
    });

    console.log(this.myForm.value);

  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.myForm.valid) {
      const product: Product = this.myForm.value;
      this.productsService.updateProduct(this.id, product)
        .subscribe((newProduct) => {
          // this.router.navigate(['./admin/products']);
          console.log(newProduct, ' INGRESADO EN LA BD');
        });
    }
    this.router.navigate(['./products']);

  }



}
