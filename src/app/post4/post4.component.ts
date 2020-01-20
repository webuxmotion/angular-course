import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
      <h2>Post title</h2>
      <p>Lorem ipsum dolor sit amet ttt</p>
    </div>
  `,
  styles: [`
    .post4 {
      padding: 5rem;
      border: 10px solid black;
    }

    h2 {
      font-size: 1rem;
    }
  `]
})
export class Post4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
