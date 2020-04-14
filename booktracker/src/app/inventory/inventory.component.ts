import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InventoryService } from '../core/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() branchName: string = '<branch name>';
  // @Output() increased = new EventEmitter<number>();

  @Input() branchLibrarian: string = '<not set>';
  @Output() decreased = new EventEmitter<number>();

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
  }

  // increaseInventory(amount: string) {
  //   this.increased.emit(parseInt(amount));
  // }

  increaseInventory(amount: string) {
    this.inventoryService.addInventory(parseInt(amount));
  }

  decreaseInventory(amount: string) {
    this.decreased.emit(parseInt(amount));
  }

}
