import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() label: string = '';

  products: any[] = [
    // {
    //   name: 'Cerveja1',
    //   price: 'R$ 10,00',
    //   img: '../../../assets/beer7.jpg'
    // },
    // {
    //   name: 'Cerveja1',
    //   price: 'R$ 10,00',
    //   img: '../../../assets/beer9.jpg'
    // },
    // {
    //   name: 'Cerveja1',
    //   price: 'R$ 10,00',
    //   img: '../../../assets/beer3.jpg'
    // },
    // {
    //   name: 'Cerveja1',
    //   price: 'R$ 10,00',
    //   img: '../../../assets/beer4.jpg'
    // },    
    // {
    //   name: 'Cerveja1',
    //   price: 'R$ 10,00',
    //   img: '../../../assets/beer5.jpg'
    // },    
    {
      name: 'Cerveja1',
      price: 'R$ 10,00',
      img: '../../../assets/beer6.jpg'
    },
    {
      name: 'Cerveja1',
      price: 'R$ 10,00',
      img: '../../../assets/beer8.jpg'
    },
    {
      name: 'Cerveja1',
      price: 'R$ 10,00',
      img: '../../../assets/beer10.jpg'
    },
    {
      name: 'Cerveja1',
      price: 'R$ 10,00',
      img: '../../../assets/beer11.jpg'
    },
    // {
    //   name: 'Cerveja1',
    //   price: 'R$ 10,00',
    //   img: '../../../assets/beer12.jpg'
    // },
    {
      name: 'Cerveja1',
      price: 'R$ 10,00',
      img: '../../../assets/beer13.jpg'
    },
    {
      name: 'Cerveja1',
      price: 'R$ 10,00',
      img: '../../../assets/beer14.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
