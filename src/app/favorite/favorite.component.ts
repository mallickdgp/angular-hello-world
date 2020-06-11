import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls:['./favorite.component.css']
  
})
export class FavoriteComponent implements OnInit {

  isFavorite = false;

  onClick($event){
    this.isFavorite = this.isFavorite ? false : true;
    console.log("Clicked!");
  }

  ngOnInit(): void {
  }

}
