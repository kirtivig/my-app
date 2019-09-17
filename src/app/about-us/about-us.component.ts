import { Component, OnInit } from '@angular/core';
import { HttpPostService } from './../http-post.service';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadInputError } from '../bad-input-error';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  posts: any[];

  public showToolTip : boolean = false;
  public flag : boolean;

  constructor(private service: HttpPostService) {
      this.flag = true;
   }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(posts => {
      this.posts = posts
      this.flag = false;
    });
  }


  createPost(input: HTMLInputElement){
    let post = {title: input.value}; //post is an object
    input.value='';
    this.service.createPosts(post).subscribe(
      response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      console.log(response.json());
      this.showToolTip=true;
      setTimeout(() => {
        this.showToolTip=false;
      }, 2000);
    }, 
    (error: AppError) => {
      if(error instanceof BadInputError) {
        // this.form.setErrors(error.originalError);
        alert ('Bad Request');
      } else throw error;
    });
  }

  //PATCH method is used to update only a few properties in object

  updatePost(post){
    this.service.updatePosts(post).subscribe(
      response => {
      console.log(response.json());
    });
    // this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post){
    this.service.deletePosts(post.id)
    .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
    }, 
    (error: AppError) => {
      if(error instanceof NotFoundError) {
        alert('This post has already been deleted');
      } else throw error;
    });
  }
}
