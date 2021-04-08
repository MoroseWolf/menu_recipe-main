import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private appUrl = environment.appUrl;
  private apiUrl = 'menu';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) { }

  getAllMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.appUrl + this.apiUrl}`);
  }

  createMenu(menu: Menu): Observable<any> {
      return this.http.post(`${this.appUrl + this.apiUrl}`, menu, this.httpOptions);
  }

  removeMenu(menuId: number): Observable<any> {
    return this.http.delete(`${this.appUrl + this.apiUrl}?id=${menuId}`, {responseType: 'text'});
  }
}
