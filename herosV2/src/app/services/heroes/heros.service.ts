import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { HerosInterface } from 'src/app/interface/heros/herosinterface';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  constructor(private _http: HttpClient ) { }

  // public getHeros() {
  //   return this._http.get('https://www.superheroapi.com/api.php/10220635930354353/search/superman');
  // }
  /**
   * @description getHeros Obtine todos los heroes
   * @returns  regresa un arreglo de heroes en formato json
   */
  public getHeros(): Observable<HerosInterface[]> {
    return this._http.get<HerosInterface[]>(`/assets/herosData.json`);
  }
  
  /**
   * 
   * @param nombre nombre del heroe que se desea buscar
   * @returns heroe que se desea
   */
  public getHero( nombre: string ): Observable<HerosInterface | undefined> {
    return this.getHeros().pipe(
      map( heroes => heroes.find( heroe => heroe.nombre === nombre ) )
    );
  }

  /**
   * 
   * @param nombre nombre del heroe que se desea buscar
   * @returns heroes con nombre similar al que se desea buscar
   */

  public getHerosByName( nombre: string ): Observable<HerosInterface[]> {
    return this.getHeros().pipe(
      map( heroes => heroes.filter( heroe => heroe.nombre.toLowerCase().includes(nombre.toLowerCase())) )
    );
  }
  
  public getAllHeros(): Observable<any> {
    return this._http.get<HerosInterface[]>(`/assets/herosData.json`).pipe(
      tap( heroes => console.log(heroes) ),
      map( heroes => heroes.map( heroe => heroe.nombre ) ),
    )
  }

}
