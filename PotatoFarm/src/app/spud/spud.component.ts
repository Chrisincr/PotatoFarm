import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spud',
  templateUrl: './spud.component.html',
  styleUrls: ['./spud.component.scss']
})
export class SpudComponent implements OnInit {
  @Input() spud :any;
  constructor() { }

  ngOnInit() {
  }

}
