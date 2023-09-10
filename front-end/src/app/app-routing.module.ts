import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RecieptsComponent } from './reciepts/reciepts.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [  { path: '', component: HomeComponent },
                          { path: 'products', component: ProductsComponent },
                          { path: 'reciepts', component: RecieptsComponent },
                          { path: 'menu', component: MenuComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
