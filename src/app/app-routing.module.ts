import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote/vote.component';
import { UserComponent } from './user/user.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { HomeComponent } from './home';
import { UserService } from './_services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from './_models'

 // getHero(id: number): Observable<Hero> {
 //    // TODO: send the message _after_ fetching the hero
 //    this.messageService.add(`HeroService: fetched hero id=${id}`);
 //    return of(HEROES.find(hero => hero.id === id));
 //  }
    


const routes: Routes = [
	{ path: '', component: MapComponent },
	{ path: 'map', component: MapComponent },
    { path: 'user/:id', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'vote', component: VoteComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { 

    constructor(private http: HttpClient, private user: UserService) { }

 //    ngOnInit() {
	// 	getIdByUser(user: User) {
	// 	    return this.http.get('/api/users');
	//     }

	//     getID(user: User){
	//         this.userService.getIdByUser(user).pipe(first()).subscribe(users => {
	//             return user.id;
	//         })
	//     }

	// }

}
