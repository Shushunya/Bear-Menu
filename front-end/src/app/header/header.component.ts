import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];

  activeItem!: MenuItem;
  ngOnInit() {
    this.items = [
      { label: 'Домашня', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'Продукти', icon: 'pi pi-fw pi-calendar', routerLink: 'products' },
      { label: 'Рецепти', icon: 'pi pi-fw pi-pencil', routerLink: 'reciepts' },
      { label: 'Меню', icon: 'pi pi-fw pi-file', routerLink: 'menu' },

    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
