import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potato-list',
  templateUrl: './potato-list.component.html',
  styleUrls: ['./potato-list.component.scss']
})
export class PotatoListComponent implements OnInit {
  potatoes = [];
  constructor() { }

  ngOnInit() {
    this.potatoes.push(
      {name:'chris'},
      {name:'james'},
      {name:'donita'},
      {name:'john'},
      {name:'katie'},)
  }

}
