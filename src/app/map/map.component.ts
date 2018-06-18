import { Component, OnInit } from '@angular/core';
import { NguiMapModule } from '@ngui/map'
import { ConfigServiceService } from './../config-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  positions: any[] = [];
  locations: any[] = [];
  events: any[] = [];

  constructor(private service: ConfigServiceService) { }

  onClick(event) {
  	if(event instanceof MouseEvent) return;
  	this.positions.push(event.latLng);
  	console.log('Left Click: ', event.latLng.lat(), event.latLng.lng());
 	var newLat = event.latLng.lat()
 	var newLng = event.latLng.lng()
  	var modLatLng = newLat+","+newLng

  	this.service.getAddress(modLatLng).subscribe(data => {

  		this.locations.push(data)
  		// console.log(data)
  	});

  }

  onDrag(event){
	var newLat = event.latLng.lat()
 	var newLng = event.latLng.lng()
  	var modLatLng = newLat+","+newLng

  	if(event instanceof MouseEvent) return;

  	console.log(event);

  	//1. Get Event lat/lng
  	var x=event.target.position.lat();
  	console.log(x);

  	//2. Find the formatted_address
	// this.service.getAddress(modLatLng).subscribe(data=>{console.log(this.locations.splice(0,1,data.results[0].formatted_address))})

  	//3. Replace loc of locations with results from 2.
  	


  	// if(this.service.getAddress(modLatLng).subscribe(data=>data.results[0].formatted_address) == this.locations[0].results[0].formatted_address){console.log('test')}


  	// this.service.getCoord(this.locations[0].results[0].formatted_address).subscribe(data => {
  		// console.log(data)
  	// })
  	// console.log(event.target.position.lat(), event.target.position.lng());

  	// this.locations.splice(this.service.whichLoc(this.locations, event),1,this.service.getAddress(modLatLng).subscribe(data => data));

  	// this.service.getCoord(this.locations[0].results[0].formatted_address).subscribe(data=>{console.log(data)});

  	// for(let i=0; i<this.positions.length; i++) {
  	// 	if(this.positions[i].lat() == event.latLng.lat() &&
  	// 		this.positions[i].lng() == event.latLng.lng()){
  	// 		console.log(i);
  	// 	}
  	// }

  }

  onRightClick(event){
	console.log('Right Click: ', event.latLng.lat(), event.latLng.lng());
	this.positions.splice(this.service.whichPos(this.positions, event),1)
  }
}

