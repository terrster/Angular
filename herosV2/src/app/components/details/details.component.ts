import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { HerosInterface } from 'src/app/interface/heros/herosinterface';
import { HerosService } from 'src/app/services/heroes/heros.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public DetailHeros: HerosInterface | undefined;

  constructor(private _heroService: HerosService,private _activatedRoute: ActivatedRoute) { 
    this._heroService.getHero(this._activatedRoute.snapshot.params.Nombrehero).pipe().subscribe({
      next: (data => this.DetailHeros = data),      
    });
    console.log(this._activatedRoute.snapshot.params.Nombrehero);
  }

  ngOnInit(): void {
  }

}
