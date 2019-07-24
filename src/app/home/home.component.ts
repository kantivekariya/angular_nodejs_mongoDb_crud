import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProductsService
  ) { }

  ngOnInit() {
    this.productsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      company: ['', Validators.required]
    })
  }

  onSubmit() {
    this.service.addProducts(this.productsForm.value).then((res)=>{
      console.log(res)
    }).catch(err=>{
      
    })
  }
}
