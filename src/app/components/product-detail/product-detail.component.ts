import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../services/product.service'
import {Product} from '../../models/product.class'
import {Router} from '@angular/router'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product : Product | null = null;

  constructor(
    public activatedRoute: ActivatedRoute,
    public productService: ProductService,
    public routerService : Router
  ) { }

  ngOnInit(): void {
    // this.handleParamsRoutesBySnapshot()
    this.handleParams()
  }
    // lay tham so bang snapshot
  handleParamsRoutesBySnapshot() {
    let id = this.activatedRoute.snapshot.params['id']
    this.product = this.productService.getProductByID(id)
    // console.log(typeof this.product)
  }
  // lay tham so bang params
  handleParams() {
   this.activatedRoute.params.subscribe(data => {
     let id = data.id
     this.product = this.productService.getProductByID(id)
    })
  }
  onBackToList() {
    this.routerService.navigate(['products'])

  }
  onEdit() {
    let id = this.activatedRoute.snapshot.params['id']

    this.routerService.navigate(['edit',id], {
      relativeTo: this.activatedRoute.parent
    })
  }
  onDelete() {

  }
}
