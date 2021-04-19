import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../../models/product.class'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = []
  public name: string;
  public price: number;
  constructor(
    // inject contructor
    public productService: ProductService,
    public routerService: Router,
    public activatedRoute: ActivatedRoute,


  ) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute)
    this.activatedRoute.queryParams.subscribe(data => {
      let name = data['name'];
      let price = data['price']
      this.name = name
      this.price = price
      this.products = this.productService.getAllProducts(name,price)
    })

    // console.log(this.products)
  }


  onSearch() {
    this.routerService.navigate(['/products'],
      { queryParams: { name: this.name ? this.name : '', price: this.price ? this.price : '' } }
    )
  }


}
