import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",component:ProductComponent},//anasayfa componenti
  {path:"products",component:ProductComponent},//url localhost:4200/products olursa
  {path:"products/category/:categoryId",component:ProductComponent},//parametre vericeksek : koyup veriyoruz.
  {path:"products/add",component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
