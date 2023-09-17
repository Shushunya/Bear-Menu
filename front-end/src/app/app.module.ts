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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';


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
    DynamicDialogModule,
    TagModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
