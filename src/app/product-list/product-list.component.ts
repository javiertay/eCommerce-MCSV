import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public inventoryList: Array<any>;
  searchField;

  constructor(public inventoryService: InventoryService) { 
    inventoryService.retrieveAll().subscribe((res:any) => this.inventoryList = res)
  }

  ngOnInit(): void {
  }
  
  clearSearchField(){
    this.searchField = '';
  }
}
