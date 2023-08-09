import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from './PostModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:8080/api/post';
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<Array<PostModel>>{
    return this.http.get<Array<PostModel>>(this.baseUrl+'/all');
  }
  getPostById(id:number):Observable<PostModel>{
    return this.http.get<PostModel>(this.baseUrl+'/'+id);
  }
  getPostByUsername(username:string):Observable<Array<PostModel>>{
    return this.http.get<Array<PostModel>>(this.baseUrl+'/by-user/'+username);
  }
  createPost(postModel:PostModel):Observable<any>{
    return this.http.post(this.baseUrl,postModel);
  }
}
