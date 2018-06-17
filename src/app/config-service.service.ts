import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ConfigServiceService {

  constructor(private http: HttpClient) { }


  getData(loc){
  	return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+loc+'&key=AIzaSyAXg1EdfqORW9vRMznLUkOzDS79qORUJ8E')
	}
}
