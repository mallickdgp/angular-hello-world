import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

  courseCategories = [
    {id:1, name:"Development"},
    {id:2, name:"Art"},
    {id:3, name:"Language"}
  ];

  log(x){
    console.log(x);
  }

}
