import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'authors',
  templateUrl: './author.component.html'
  
})
export class AuthorComponent implements OnInit {
  title;
  authors;
  email = "me@example.com";
  constructor(service: AuthorService) { 
    this.authors = service.getAuthors();
    this.title = this.authors.length + " Authors"
    
  }

  onKeyUp(){
      console.log(this.email);
  }

  ngOnInit(): void {
  }

}
