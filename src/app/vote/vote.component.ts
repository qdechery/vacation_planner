import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MapComponent } from './../map/map.component';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements AfterViewInit {
  
  @ViewChild(MapComponent) child;

  constructor() { }

  locations: any[] = [];

  ngAfterViewInit() {
  	this.locations = this.child.locations;
  }
}
