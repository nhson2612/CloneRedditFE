import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthService } from './auth/AuthService.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { PostTitleComponent } from './post-title/post-title.component';
import { VoteComponent } from './vote/vote.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthGuard } from './auth/AuthGuard';
import { TokenIntercepter } from './auth/TokenIntercepter';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SubredditSideBarComponent } from './subreddit-side-bar/subreddit-side-bar.component';
import { SubredditService } from './SubredditService.service';
import { CreateSubredditComponent } from './create-subreddit/create-subreddit.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { SubredditsListComponent } from './subreddits-list/subreddits-list.component';
import { VoteService } from './VoteService.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'create-post', component: CreatePostComponent , canActivate: [AuthGuard]},
  { path: 'submit', component: CreateSubredditComponent , canActivate: [AuthGuard]},
  { path: 'post/:id', component: ViewPostComponent , canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    PostTitleComponent,
    VoteComponent,
    HomeComponent,
    SideBarComponent,
    SubredditSideBarComponent,
    CreateSubredditComponent,
    CreatePostComponent,
    SubredditsListComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    FontAwesomeModule,
    EditorModule
  ],
  providers: [AuthService,AuthGuard,SubredditService,VoteService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenIntercepter,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
