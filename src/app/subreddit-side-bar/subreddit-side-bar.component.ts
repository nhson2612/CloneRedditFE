import { Component } from '@angular/core';
import { SubredditService } from '../SubredditService.service';
import { SubredditModel } from '../SubredditModel';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css']
})
export class SubredditSideBarComponent {

  subreddits: Array<SubredditModel> = [];

  constructor(private subredditService:SubredditService) { }

  ngOnInit(){
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
    });
    
  }

}
