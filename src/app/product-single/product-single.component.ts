import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {
  id: string;
  product: Array<any>;
  quantityForm: FormGroup;
  
  constructor(public inventoryService: InventoryService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    })

    this.inventoryService.retrieveById(this.id).subscribe((res:any) => {
      this.product = res;
    })

    this.quantityForm = this.fb.group({
      purchase_quantity: ['']
    })
  }

}
