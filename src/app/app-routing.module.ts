import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

const routes: Routes = [
  {path:"",component:ProductComponent},//anasayfa componenti
  {path:"products",component:ProductComponent},//url localhost:4200/products olursa
  {path:"products/category/:categoryId",component:ProductComponent},//parametre vericeksek : koyup veriyoruz.
  {path:"products/add",component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
