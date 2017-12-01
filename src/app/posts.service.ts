import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';



@Injectable()
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  public results: Post[];

  getPosts(){
    this.httpClient.get<Post[]>('api/posts').subscribe(data => {
      this.results = data;
    });
  }

  createPost(postTitle: string, postBody: string){
    return new Promise<any>((resolve, reject) => {
      this.httpClient.post('api/posts', {
        PostTitle: postTitle,
        PostBody: postBody
      }).subscribe(data => {
        resolve(data);
      });
    });
  }

}
