import { Component, OnInit } from '@angular/core';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/AuthService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit{

  isLoggin = false;

  searchIcon = faSearch;

  faChevronDown = faChevronDown;

  username:string = '';

  searchText:string = '';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isLoggin = this.authService.isLoggedIn();
    console.log( ">>>>>>>>IS LOGGIN >>>>>>>>>" + this.isLoggin);

    if(this.isLoggin){
      this.username = this.authService.getUsername();
    } 
  }

  search(){
    console.log("searchText >>>>>>>>>>>>>>>>>" + this.searchText);
  }

}
