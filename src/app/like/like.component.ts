import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('isLiked') isTweetLiked: boolean;
  @Input('likesCount') numberOfLikes: number;

  onClick($event){
    this.isTweetLiked = !this.isTweetLiked;
    
      this.numberOfLikes = this.isTweetLiked ? this.numberOfLikes + 1 : this.numberOfLikes -1;
      

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
