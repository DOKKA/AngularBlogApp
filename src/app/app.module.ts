import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { PostsService } from './posts.service';

const appRoutes: Routes = [
  {
    path: 'main',
    component: BlogListComponent
  },
  {
    path: 'Home/Blog',
    component: BlogListComponent
  },
  {
    path: 'create',
    component: BlogCreateComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogCreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
