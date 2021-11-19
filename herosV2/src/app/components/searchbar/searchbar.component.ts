import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { HerosInterface } from 'src/app/interface/heros/herosinterface';
import { HerosService } from 'src/app/services/heroes/heros.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  public HerosList: HerosInterface[] = [];
  public loading: boolean = false;

  constructor(
    private _heroService: HerosService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { 
      this._heroService.getHerosByName(this._activatedRoute.snapshot.params.Busqueda).subscribe(
        (data: HerosInterface[]) => {
          this.loading= true;
          this.HerosList = data;
        }
      );
      this._heroService.getAllHeros().subscribe(console.log);
    }


  ngOnInit(): void {
  }
  goto(ruta: string[]): void {
    this._router.navigate(ruta);
  }

}
