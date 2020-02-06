import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.scss']
})
export class PotatoComponent implements OnInit {
  @Input() potato :any;
  constructor() { }

  ngOnInit() {
  }

}
