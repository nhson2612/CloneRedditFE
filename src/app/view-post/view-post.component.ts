import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { PostModel } from '../PostModel';
import { faThumbsUp, faThumbsDown, faPaperclip, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/AuthService.service';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentModel } from '../CommentModel';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit{
  postId:any;
  post:PostModel = {
    id: null,
    postName: '',
    url: '',
    description: '',
    voteCount: null,
    username: '',
    subredditName: '',
    commentCount: null,
    duration: '',
    voteUp: null,
    voteDown: null
  };
  voteUp = faThumbsUp;
  voteDown = faThumbsDown;
  postIcon = faPaperclip;
  closeIcon = faTimes;
  username:string = '';
  commentForm:FormGroup;
  comments:CommentModel[] = [];
  comment : CommentModel = {
    text: '',
    postId: null,
    username: '',
    createdDate: null,
    id: null
  }
  
  ngOnInit(): void {
    
  }


  constructor(private activeRoute:ActivatedRoute,private postService:PostService,private commentService:CommentService){


    this.commentForm = new FormGroup({
      text: new FormControl('',Validators.required)
    });

    this.postId = this.activeRoute.snapshot.paramMap.get('id');
    console.log("Post Id >>>>>>>>> " + this.postId);
    
    this.postService.getPostById(this.postId).subscribe((data)=>{
      this.post  = data;
    });

    commentService.getAllCommentOfPost(this.postId).subscribe((data)=>{
      this.comments = data;
    });
  }

  addComment(){
    this.comment.text = this.commentForm.get('text').value;
    this.comment.postId = this.postId;
    this.comment.username = this.username;
    this.comment.createdDate = new Date();
    this.commentService.comment(this.comment).subscribe((data)=>{
      this.commentForm.get('text').setValue('');
      this.comments.push(data);
    });
  }

  // constructor(private activeRoute:ActivatedRoute,private postService:PostService,private authService:AuthService, private commentService:CommentService) {}
  // ngOnInit(): void {
  //   this.postId = this.activeRoute.snapshot.paramMap.get('id');
  //   this.postService.getPostById(this.postId).subscribe((data)=>{
  //     console.log( "DATA >>>>>>> " + data);
  //     this.post = data;
  //   });
  //   this.username = this.authService.getUsername();
  //   this.commentForm =  new FormGroup({
  //     text: new FormGroup(' ',Validators.required)
  //   });
  //   this.commentService.getAllCommentOfPost(this.postId).subscribe((data)=>{
  //     this.comments = data;
  //   });
  // } {

}
