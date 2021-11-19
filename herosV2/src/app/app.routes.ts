import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DetailsComponent } from './components/details/details.component';
import { HerosComponent } from './components/heros/heros.component';
import { HomeComponent } from './components/home/home.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heros', component: HerosComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'details/:Nombrehero', component: DetailsComponent },
    { path: 'search/:Busqueda', component: SearchbarComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);