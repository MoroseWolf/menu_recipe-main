import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

    constructor() { }

    getAllMenu(): Menu[] {
      return [];
    }

    createMenu(menu: Menu): void {
      
    }

    removeMenu(menuId: number): void {

    }
}
