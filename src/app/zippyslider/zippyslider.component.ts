import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zippyslider',
  templateUrl: './zippyslider.component.html',
  styleUrls: ['./zippyslider.component.css']
})
export class ZippysliderComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
