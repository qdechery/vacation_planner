import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ConfigServiceService {

  constructor(private http: HttpClient) { }

  getAddress(coordinates){
  	return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+coordinates+'&key=AIzaSyAXg1EdfqORW9vRMznLUkOzDS79qORUJ8E')
  }

  getCoord(address){
	return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=AIzaSyAXg1EdfqORW9vRMznLUkOzDS79qORUJ8E')
  }
}