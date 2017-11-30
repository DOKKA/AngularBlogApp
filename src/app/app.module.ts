import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';

const appRoutes: Routes = [
  {
    path: 'main',
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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogCreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
