import { MovieTitleComponent } from './../movie-title/movie-title.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives: any[];
  constructor() { }

  ngOnInit(){
    this.archives = [
      {
        year: 2017,
        month: 1
      },
      {
        year: 2018,
        month: 1
      },
      {
        year: 2019,
        month: 1
      }
    ]
  }

}
