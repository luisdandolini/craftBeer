import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/providers/products';
import { ProductService } from 'src/app/providers/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

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
