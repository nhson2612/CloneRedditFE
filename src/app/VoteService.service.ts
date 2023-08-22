import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VoteModel } from "./VoteModel";
import { Observable } from "rxjs";

@Injectable()
export class VoteService {

    baseUrl = "http://localhost:8080/api/vote";

    constructor(private httpClient:HttpClient) {
    }
    
    vote(voteModel:VoteModel):Observable<any>{
        return this.httpClient.post(this.baseUrl,voteModel);
    }
}