import { Component, OnInit } from '@angular/core';
import { NgModel} from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  title: string;
  body: string;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }


  submitPost() {
    this.postsService.createPost(this.title, this.body).then((data)=>{
      console.log(data);
    })
  }

}
