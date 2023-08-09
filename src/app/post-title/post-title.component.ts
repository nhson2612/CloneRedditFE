import { Component, Input } from '@angular/core';
import { PostModel } from '../PostModel';
import { PostService } from '../post.service';
import { faArrowUp, faArrowDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent {
  posts:Array<PostModel> = [];

  btnComment = faCommentAlt;
  voteUp = faArrowUp;
  voteDown = faArrowDown;

  constructor(private postService:PostService) {
    this.postService.getAllPosts().subscribe(data => { this.posts = data; })
   }
}
