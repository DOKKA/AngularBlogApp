import { Component, OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  title: string;
  body: string;

  constructor(public postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }


  submitPost() {
    if(!this.title || !this.body){
      console.log('Show validation here');
    } else {
      this.postsService.createPost(this.title, this.body).then((data)=>{
        this.router.navigate(['main']);
      });
    }

  }

}
