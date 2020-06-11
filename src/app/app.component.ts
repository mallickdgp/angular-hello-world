import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from Angular';

  tweet = {
    body:"Here is some blah blah blah...",
    isLiked: false,
    likesCount: 130
  }
}