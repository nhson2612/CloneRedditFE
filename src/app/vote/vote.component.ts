import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../PostModel';
import { faArrowAltCircleDown, faArrowAltCircleUp, faArrowDown, faArrowUp, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { arrow } from '@popperjs/core';
import { VoteService } from '../VoteService.service';
import { VoteModel } from '../VoteModel';
import { VoteType } from '../VoteType';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit{

  @Input() post:PostModel;
  
  voteUp = faThumbsUp;
  voteDown = faThumbsDown;
  voteModel:VoteModel;

  constructor(private voteService:VoteService) { }

  ngOnInit(): void {
    this.voteModel = {
      voteType: null,
      postId: null
    }
  }

  vottingUp(){
    console.log("votting for post " + this.post.id);
    
    this.voteModel.postId = this.post.id;
    this.voteModel.voteType = VoteType.UPVOTE;
    this.vote();
    console.log(" >>>>>>>>> you voted up post " + this.post.id);
  }

  vottingDown(){
    console.log("votting for post" + this.post.id );
    
    this.voteModel.postId = this.post.id;
    this.voteModel.voteType = VoteType.DOWNVOTE;
    this.vote();
    console.log(" >>>>>>>>> you voted down post " + this.post.id);
    
  }

  vote(){
    this.voteService.vote(this.voteModel).subscribe(data => {
      this.post.voteCount = data;
    });
  }
}
