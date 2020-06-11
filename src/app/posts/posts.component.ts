import { AppError } from './../common/app-errors/app-error';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any[];
 
  constructor(private service: PostService) {
   
   }
   ngOnInit(){
    this.service.getAll().subscribe(posts => {this.posts = posts;});
   }

   createTitle(input: HTMLInputElement){
     let post = {title: input.value};
     input.value = '';
     this.service.create(post).subscribe((newpost: Post) =>{
       post['id'] = newpost.id;
       this.posts.splice(0,0,post);
       console.log(newpost);
     }, (error: AppError) => {
       if(error instanceof BadInput){

       }else{
        throw error;
        
       }
  });
   }
   updatePost(post){
     this.service.update(post).subscribe(updatedPost =>{
       console.log(updatedPost);
     }, (error: AppError) => {
       if(error instanceof NotFoundError){
         alert('Cannot find post for update!')
       }else{
      throw error;
       }
  });
   }

   deletePost(post){
     this.service.delete(post.id).subscribe(() => {
       let index = this.posts.indexOf(post);
       this.posts.splice(index, 1);
     }, (error: AppError) => {
       if(error instanceof NotFoundError){
         alert('This post has already been deleted!')
       }else{
        throw error;
       }
      
  });
   }

}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
