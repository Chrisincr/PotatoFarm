import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spud-list',
  templateUrl: './spud-list.component.html',
  styleUrls: ['./spud-list.component.scss']
})
export class SpudListComponent implements OnInit {

  constructor() { }
  spuds = [];
  ngOnInit() {
    this.spuds.push(
      {name:'belle'},
      {name:'bubba'},
      {name:'emmy'},
      {name:'arria'},
      {name:'aerin'},)
  }

}
