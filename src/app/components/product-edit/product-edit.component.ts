import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Router } from '@angular/router'
import { Product } from '../../models/product.class'
import {ProductService} from '../../services/product.service'
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public product: Product | null = null;
  public name: string;
  public price: number;
  public status: boolean;
  constructor(
    public activatedRoute: ActivatedRoute,
    public routerService: Router,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.handleParams()
  }
  handleParams() {
    this.activatedRoute.params.subscribe((params: Params) => {
      // console.log(params['id'])
      this.product = this.productService.getProductByID(params['id'])
    })
  }

  handleSubmit() {
    // let id = this.activatedRoute.snapshot.params['id']
    // this.name = this.product.name;
    // this.price = this.product.price;
    // this.status = this.product.status;
    // // console.log(this.name,this.price,this.status)
    // this.productService.updateProduct(id,this.name,this.price,this.status)
    this.routerService.navigate(['products'])
  }

}
