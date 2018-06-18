import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ConfigServiceService {

  constructor(private http: HttpClient) { }


  getAddress(loc){
  	return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+loc+'&key=AIzaSyAXg1EdfqORW9vRMznLUkOzDS79qORUJ8E')
	}

  getCoord(coordinates){
	return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+coordinates+'&key=AIzaSyAXg1EdfqORW9vRMznLUkOzDS79qORUJ8E')

  }

  whichPos(positions, event){
  	for (let i=0; i<positions.length; i++){
  		if(positions[i].lat() == event.latLng.lat()){
  			return i
  		}   		
  	}
  }

  whichLoc(locations, event){
	// console.log(this.getCoord(this.locations[0].results[0].formatted_address));
  	for (let i=0; i<locations.length; i++){
  		if(1 == event.latLng.lat()){
  			return i
  		}   		
  	}
  }
}
