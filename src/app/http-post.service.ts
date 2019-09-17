import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import { BadInputError } from './bad-input-error';

@Injectable({
  providedIn: 'root'
})
export class HttpPostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url)
    .pipe(
      map(response => response.json()));
  }

  createPosts(post){
    return this.http.post(this.url,JSON.stringify(post)).pipe(
      catchError(this.handleError) //reference to handleError method passed. method is not called
    );
  }

  updatePosts(post: { id: string; }){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).pipe(
      catchError(this.handleError)
    );
  }

  deletePosts(id){
    return this.http.delete(this.url + '/' + id).pipe(
    catchError(this.handleError)
  );
}

  private handleError(error: Response){
    if(error.status === 404)
      return throwError(new NotFoundError());

    if(error.status === 400)
      return throwError(new BadInputError(error.json()));
    
    return throwError(new AppError(error.json()));
}
}
