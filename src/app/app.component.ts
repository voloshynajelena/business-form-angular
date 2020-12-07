import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  timestamp: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Learn English', 
      text: 'I just leave it here',
      timestamp: '2012-02-05T02:57',
      id: 1
    },
    {
      title: 'Learn Angular', 
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nisi eos doloribus impedit praesentium iure soluta tenetur asperiores modi doloremque sed autem tempora, sint cupiditate, aliquam veniam mollitia aperiam quod?',
      timestamp: '2018-12-03T15:28',
      id: 2
    },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter( post => post.id != id )
  }
}
