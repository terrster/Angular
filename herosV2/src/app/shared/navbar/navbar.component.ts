import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { HerosService } from 'src/app/services/heroes/heros.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public options: string[] = [];
  public nonbre: string [] = [];
  /**
   * Para usar el formulario de busqueda(formControl) se necesita importartar el ReactiveFormsModule en el app.module.ts
   */
  public searchform : FormControl = new FormControl()

  constructor( private _router: Router,
    private _heroService: HerosService,
    private _activatedRoute: ActivatedRoute,
    ) {  this._heroService.getAllHeros().subscribe((data) => this.nonbre = data)  }

  ngOnInit(): void {
    this.searchform.valueChanges.pipe(
      debounceTime(500),
      map(value => this.options = this.nonbre.filter(option => option.toLowerCase().includes(value.toLowerCase()))) ).subscribe();
      // map(value => value == ''? this.goto(['heros']): this.goto(['search', value])),
  

  }


  goto(ruta: string[]): void {
    this._router.navigate(ruta);
  }



}


