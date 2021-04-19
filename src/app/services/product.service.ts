import { Injectable } from '@angular/core';
import { Product } from '../models/product.class'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products : Product[] = [
    {
      id: 1,
      name: "IphoneX",
      price: 39,
      status: true
    },
    {
      id: 2,
      name: "Iphone 5s",
      price: 39,
      status: false
    },
    {
      id: 3,
      name: "Iphone 8",
      price: 39,
      status: true
    },
    {
      id: 4,
      name: "Iphone7 plus",
      price: 39,
      status: true
    },
    {
      id: 5,
      name: "Iphone 6s",
      price: 39,
      status: true
    },
    {
      id: 6,
      name: "Iphone 12pro max",
      price: 80,
      status: true
    },

  ]
  constructor() { }
  getAllProducts(name?: string, price?: number) {
    let result : Product[] = this.products
    if (name) {
      result = this.products.filter(x => {
        return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1
      });
    }
    if (price) {
      result = this.products.filter(x => {
        return x.price == price
      });
    }
    return result
  }
  getProductByID(id: number) {
    let result = null
    for (var i = 0; i < this.products.length; i++){
      if (this.products[i].id == id) {
        result = this.products[i]
        break;
      }
    }
    return result;
  }
  updateProduct(id : number,name : string, price :number, status : boolean) {
    if (id) {
      for (var i = 0; i < this.products.length; i++){
        if (this.products[i].id == id) {
          this.products[i].name = name;
          this.products[i].price = price;
          this.products[i].status = status;
          console.log( this.products[i].name, this.products[i].price, this.products[i].status)
        }
        break;
      }
    }
  }
}
