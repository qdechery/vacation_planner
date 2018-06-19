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

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'map', component: MapComponent },
	{ path: 'user/:id', component: UserComponent },
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
export class AppRoutingModule { }
