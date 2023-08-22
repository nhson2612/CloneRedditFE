import { Component, Input } from '@angular/core';
import { PostModel } from '../PostModel';
import { PostService } from '../post.service';
import { faArrowUp, faArrowDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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

  constructor(private postService:PostService,private router:Router) {
    console.log(">>>>>>>>>>>>>>>>GET ALL POSTS<<<<<<<<<<<<<<<<<<<<<<<<<<");
    
    this.postService.getAllPosts().subscribe(data => { 
      this.posts = data;
      console.log(">>>>>>>>>>>>>>>>>>>>> ALL POST IN PARENT" + this.posts);
     })
  }

  goToPost(post:PostModel){
    this.router.navigateByUrl('/post/'+post.id);
  }
}
