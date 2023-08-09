import { Component, Input } from '@angular/core';
import { PostModel } from '../PostModel';
import { faArrowAltCircleDown, faArrowAltCircleUp, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { arrow } from '@popperjs/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  @Input() post:PostModel;
  
  voteUp = faArrowUp;
  voteDown = faArrowDown;
}
