import { HttpClient } from "@angular/common/http";
import { SubredditModel } from "./SubredditModel";
import { Observable } from "rxjs";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class SubredditService {

    baseUrl = 'http://localhost:8080/api/subreddit';

    constructor(private http: HttpClient) { }

    getAllSubreddits() : Observable<Array<SubredditModel>>{
        return this.http.get<Array<SubredditModel>>(this.baseUrl + '/all');
    }
    createSubreddit(subreedditModel:SubredditModel):Observable<SubredditModel> {
        console.log("Đang tạo subreddit");
        
        return this.http.post<SubredditModel>(this.baseUrl,subreedditModel);
    }
}