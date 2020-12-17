import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  cart = [
    {
      text: "Everfresh Flowers",
      image: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cart.push({"text": "", "image": ""})
  }

}
