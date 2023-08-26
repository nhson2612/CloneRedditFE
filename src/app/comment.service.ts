import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentModel } from './CommentModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  getAllCommentOfPost(postId:number):Observable<CommentModel[]>{
    return this.httpClient.get<CommentModel[]>('http://localhost:8080/api/comments/bt-post/'+postId);
  }

  comment(commentModel:CommentModel):Observable<CommentModel>{
    return this.httpClient.post<CommentModel>('http://localhost:8080/api/comments/',commentModel);
  }

}
