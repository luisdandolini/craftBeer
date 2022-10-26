import { Products } from './../../providers/products';
import { ProductService } from './../../providers/product.service';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() label: string = '';

  constructor(private _productService: ProductService) { }
  public products: Products[] = []


  ngOnInit(): void {

    this._productService.getProducts()
      .subscribe(
        retorno => {
          this.products = retorno.map(item => {
            return new Products(item.id, item.name, item.price, item.img);
          });
        }
      )
  }  

}
