import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubredditService } from '../SubredditService.service';
import { faExclamationCircle, faEye, faLock, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { SubredditModel } from '../SubredditModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent {
  subredditModel:SubredditModel;
  createSubredditForm:FormGroup;
  closeIcon = faTimes;


  constructor(private subredditService:SubredditService,private router:Router){
    this.createSubredditForm = new FormGroup(
      {
        subredditName:new FormControl('',Validators.required),
        desscription: new FormControl('',Validators.required)
      }
    );
    this.subredditModel = {
      id: undefined,
      subredditName:'',
      description:''
    }
  }


  createSubredditSubmit(){
    this.subredditModel.subredditName = this.createSubredditForm.value.subredditName;
    this.subredditModel.description = this.createSubredditForm.value.desscription;
    
    return this.subredditService.createSubreddit(this.subredditModel).subscribe(data => {
      console.log("success");
      
      this.router.navigateByUrl('');
    }, error => {
      console.log("failure");
      
      console.log(error);
    });
  }
  
}
