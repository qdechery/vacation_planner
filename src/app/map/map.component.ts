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
  
  constructor(private service: ConfigServiceService) { }

  

  onClick(event) {
  	if(event instanceof MouseEvent) return;
  	this.positions.push(event.latLng);
  	// console.log(event.latLng.lng());
 	var newLat = event.latLng.lat()
 	var newLng = event.latLng.lng()
  	var modLatLng = newLat+","+newLng

  	this.service.getData(modLatLng).subscribe(data => this.locations.push(data))
	// this.locations.push(this.service.getData()
	// 	.subscribe(data => data)
	// )  
  }

  // ngOnInit() {
  // 	this.service.getData().subscribe(data => {
		// this.locations.push(data.results[1].formatted_address);
  // 	console.log(this.locations);
  // }
  
}

