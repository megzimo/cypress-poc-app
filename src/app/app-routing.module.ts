import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroceryItemComponent } from './grocery-item/grocery-item.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemEditComponent } from './item-edit/item-edit.component';


const routes: Routes = [
  {
    path: '',
    component: GroceryListComponent,
    data: { title: 'Grocery List' }
  },
  {
    path: 'add',
    component: ItemAddComponent,
    data: { title: 'Add Item' }
  },
  {
    path: 'products/:id',
    component: GroceryItemComponent,
    data: { title: 'Grocery Item Details' }
  },
  {
    path: 'edit',
    component: ItemEditComponent,
    data: { title: 'Product Edit' }
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
