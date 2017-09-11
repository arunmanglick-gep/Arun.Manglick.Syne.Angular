import { Component, OnInit } from '@angular/core';

import { DataService } from "./Services/app.dataService";

@Component({
  selector: 'my-app',
  template: ` <h2>HTTP Communication</h2>
              <ul class="list-unstyled" *ngIf="posts && posts.length">
                <li *ngFor="let post of posts">
                  <h3>{{post.id}}</h3>
                  <h4>{{post.title}}</h4>
                  <p>{{post.body}}</p>
                  <hr/>
                </li>
              </ul>
            `,
  providers: [DataService]
})
export class RootComponent implements OnInit {
  posts: any[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.dService.getAllPosts().subscribe(
      results => this.posts = results,
      (err) => { console.log(err) });
  }
}