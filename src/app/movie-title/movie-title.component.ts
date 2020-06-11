import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movietitle',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css']
})
export class MovieTitleComponent implements OnInit {
  movieTitle;
  casedMovieTitle;
  constructor() { }

  onKeyPress(){
    this.casedMovieTitle = this.movieTitle;
  }

  ngOnInit(): void {
  }

}
