import { RouterModule } from '@angular/router';
import { GitFollowersComponent } from './git-followers/git-followers.component';
import { GitFollowersService } from './services/git-followers.service';
import { PostService } from './services/post.service';
import { LikeComponent } from './like/like.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { MovieTitleComponent } from './movie-title/movie-title.component';
import { TitlePipe } from './title.pipe';
import { ZippysliderComponent } from './zippyslider/zippyslider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CoursesComponent } from './courses/courses.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    FavoriteComponent,
    MovieTitleComponent,
    TitlePipe,
    LikeComponent,
    ZippysliderComponent,
    ContactFormComponent,
    CoursesComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GitFollowersComponent,
    HomeComponent,
    ArchiveComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'archives/:year/:month', component: ArchiveComponent},
      {path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [
    AuthorService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    GitFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
