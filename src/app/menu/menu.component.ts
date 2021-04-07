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
  /*
  menus: Menu[] =  [
    {
      id: 1,
      day: 'Первый день',
      name: 'Менюшка',
      summ_calories: 61,
      recipeSet: [
        {
          name: 'Первый рецепт',
          summ_calories: 61
        }
      ]
    },
    {
      id: 2,
      day: 'Второй день',
      name: 'Менюшка',
      summ_calories: 150,
      recipeSet: [
        {
          name: 'Второй рецепт',
          summ_calories: 150
        }
      ]
    }  
  ];
  */

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
 

  removeMenu(menuId: number): void {
    this.menuService.removeMenu(menuId);
  }

}
