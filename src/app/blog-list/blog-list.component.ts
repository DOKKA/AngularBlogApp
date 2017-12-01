import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post} from '../post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent implements OnInit {

  

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
  }

}
