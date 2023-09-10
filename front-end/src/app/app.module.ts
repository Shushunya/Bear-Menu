import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RecieptsComponent } from './reciepts/reciepts.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    RecieptsComponent,
    MenuComponent,
    ProductCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TabMenuModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    BrowserAnimationsModule,
    DynamicDialogModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
