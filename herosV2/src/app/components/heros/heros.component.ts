import { Component, OnInit } from '@angular/core';
import { HerosInterface } from 'src/app/interface/heros/herosinterface';
import { HerosService } from 'src/app/services/heroes/heros.service';
import { delay, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  public HerosList: HerosInterface[] = [];
  public loading: boolean = false;
  
  constructor(private _heroService: HerosService,
    private _router: Router) { 
    this._heroService.getHeros().pipe(
      tap(() => this.loading = true),
      map(data => this.HerosList = data),
      delay(500),
    ).subscribe(
      () => this.loading = false
    );
  }

  goto(ruta: string[]): void {
    this._router.navigate(ruta);
  }

  ngOnInit(): void {

  }

}
