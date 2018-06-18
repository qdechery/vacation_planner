import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote/vote.component';
import { UserComponent } from './user/user.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
	{ path: './map', component: MapComponent },
	{ path: './user/:id', component: UserComponent },
	{ path: './vote', component: VoteComponent }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
