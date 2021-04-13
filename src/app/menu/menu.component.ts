import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../app.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private menuService: MenuService
  ) { }

  allMenu: Menu[] = [];
  

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {
    this.menuService.getAllMenu().subscribe(
      data => {
        this.allMenu = data;
      },
      error => {
        console.log(error);
      });
  }
 
  buyMenu(menuId: number): void {
    this.menuService.buyMenu(menuId).subscribe();
  }

  removeMenu(menuId: number): void {
    this.menuService.removeMenu(menuId).subscribe(
      data => {
        this.loadMenu();
      },
      error => console.log(error)
    );
  }

}
